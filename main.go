package main

import (
	"log"
	"net/http"
	"html/template"
	"fmt"
)

var tmpl = template.Must(template.ParseFiles("templates/home.html"))
var tic_tac_toe = template.Must(template.ParseFiles("templates/tictactoe.html"))
func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := map[string]string{
			"Title": "Elliott's Website",
		}

		if err := tmpl.Execute(w, data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	http.HandleFunc("/tic-tac-toe", func(w http.ResponseWriter, r *http.Request) {
		data := map[string]string {
			"Title": "Tic Tac Toe",
		}

		if err := tic_tac_toe.Execute(w, data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		r.ParseForm()
		un := r.FormValue("username")
		fmt.Println(un)
	})
	
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	log.Println("Server running at http://elliottcepin.dev:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
