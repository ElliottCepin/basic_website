package main

import (
	"log"
	"net/http"
	"html/template"
)

var tmpl = template.Must(template.ParseFiles("templates/html/home.html"))

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := map[string]string{
			"Title": "Home Page",
			"Message": "Hello, friend!",
		}

		if err := tmpl.Execute(w, data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	
	log.Println("Server running at http://elliottcepin.dev:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
