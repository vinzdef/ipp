package main

import (
	"./server"
	"log"
	"net/http"
)

const HOST_PORT = "0.0.0.0:3000"

func main() {
	http.Handle("/", server.HandleStatic)
	http.Handle("/v1/websocket", server.WebSocketHandler{})
	http.Handle("/v1/increase", server.IncreasePOSTHandler{})

	go server.MainHub.Run()

	log.Println("[+] Server Listening on ", HOST_PORT)
	http.ListenAndServe(HOST_PORT, nil)
}
