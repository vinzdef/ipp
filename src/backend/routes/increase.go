package routes

import (
	"../server"
	"log"
	"net/http"
)

type IncreaseHandler struct {
	Ctx *server.Context
}

func (i IncreaseHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		i.Ctx.Counter = i.Ctx.Counter + 1
		i.Ctx.Hub.Broadcast <- asByteString(i.Ctx.Counter) //Hub can be omitted because same name in go. But kept for clarity and maintanab.

		log.Println("[+] {Counter} - Increase:", i.Ctx.Counter)
	} else {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("400 - Bad Request (This endpoint only accepts POST)"))
	}
}
