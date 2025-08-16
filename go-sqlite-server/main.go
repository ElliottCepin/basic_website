package main

import (
	"database/sql"
	"log"
	_ "modernc.org/sqlite"
)

func main(){
	db, err := sql.Open("sqlite", "storage.db")

	if err != nil {
		log.Fatalf("failed to open database: %v", err)
	}

	defer db.Close() 

	if err := db.Ping(); err != nil {
		log.Fatalf("failed to ping database: %v", err)
	}

	log.Println("Successfully connected to the database!")

	createTableSQL := `
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT NOT NULL,
		password TEXT NOT NULL
	);`

	_, err = db.Exec(createTableSQL)
	if err != nil {
		log.Fatalf("failed to create table: %v", err)
	}

	log.Println("Database table 'users' is ready.")
}


