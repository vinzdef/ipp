package main

import (
	"log"
    "fmt"
	"net/http"
)

const PORT = 3000

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)

	log.Println("[+] Server Listening on :", PORT)
	http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil)
}
