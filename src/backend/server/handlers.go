package server

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/websocket"
)

var MainHub = NewHub()
var counter = 0
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

var HandleStatic = http.FileServer(http.Dir("static"))

func HandleWebSocket(w http.ResponseWriter, r *http.Request) {
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

func HandleIncrease(w http.ResponseWriter, r *http.Request) {
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
