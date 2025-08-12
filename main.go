package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello, friend!")
	})

	http.HandleFunc("/testing-tags", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "<h1>This page uses tags</h1>")
	})

	log.Println("Server running at http://elliottcepin.dev:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
