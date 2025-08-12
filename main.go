package main

import (
	"log"
	"net/http"
	"html/template"
)

var tmpl = template.Must(template.ParseFiles("templates/home.html"))

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := map[string]string{
			"Title": "Home Page",
		}

		if err := tmpl.Execute(w, data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	log.Println("Server running at http://elliottcepin.dev:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
