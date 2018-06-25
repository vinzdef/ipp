package routes

import (
	"../server"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type WebSocketHandler struct {
	Ctx *server.Context
}

func (ws WebSocketHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("[!] Error", err)
	}

	client := server.NewClient(conn, ws.Ctx.Hub)
	client.Hub.Register <- client

	go client.WritePump()
	go client.ReadPump()

	client.Send <- asByteString(ws.Ctx.Counter)
	log.Println("[+] {Client} - Registered:", client)
}
