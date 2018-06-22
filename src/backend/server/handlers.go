package server

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/websocket"
)

var counter = 0
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

var MainHub = NewHub()
var HandleStatic = http.FileServer(http.Dir("static"))

type WebSocketHandler struct{}

func (h WebSocketHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("[!] Error", err)
	}

	client := NewClient(conn, MainHub)
	client.hub.register <- client

	go client.writePump()
	go client.readPump()

	client.send <- counterAsByteString()
	log.Println("[+] {Client} - Registered:", client)
}

type IncreasePOSTHandler struct{}

func (h IncreasePOSTHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		counter = counter + 1
		//this will dispatch the new value to every client
		MainHub.Broadcast <- counterAsByteString()

		log.Println("[+] {Counter} - Increase:", counter)
	} else {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("400 - Bad Request (This endpoint only accepts POST)"))
	}
}

func counterAsByteString() []byte {
	return []byte(strconv.Itoa(counter))
}
