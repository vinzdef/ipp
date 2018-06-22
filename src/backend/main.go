package main

import (
	"./server"
	"log"
	"net/http"
)

const HOST_PORT = "0.0.0.0:3000"

func main() {

	http.Handle("/", server.HandleStatic)
	http.HandleFunc("/v1/websocket", server.HandleWebSocket)
	http.HandleFunc("/v1/increase", server.HandleIncrease)

	go server.MainHub.Run()

	log.Println("[+] Server Listening on ", HOST_PORT)
	http.ListenAndServe(HOST_PORT, nil)
}
