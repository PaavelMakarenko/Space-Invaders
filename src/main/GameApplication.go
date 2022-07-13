package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./")))
	log.Println("Starting the game at host http://127.0.0.1:8080/web/")
	http.ListenAndServe("127.0.0.1:8080", nil)
}
