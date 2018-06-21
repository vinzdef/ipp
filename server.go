package main

import (
	"log"
	"net/http"
)

const HOST_PORT = "0.0.0.0:3000"

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)

	log.Println("[+] Server Listening on ", HOST_PORT)
	http.ListenAndServe(HOST_PORT, nil)
}
