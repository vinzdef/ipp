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
	http.Handle("/v1/reset", server.ResetPOSTHandler{})

	go server.MainHub.Run()

	log.Println("[+] Server Listening on ", HOST_PORT)
	http.ListenAndServe(HOST_PORT, nil)
}
