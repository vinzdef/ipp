package routes

import (
	"../server"
	"log"
	"net/http"
)

type ResetHandler struct {
	Ctx *server.Context
}

func (rt ResetHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		rt.Ctx.Counter = 0
		rt.Ctx.Hub.Broadcast <- asByteString(rt.Ctx.Counter)

		log.Println("[+] {Counter} - Reset:", rt.Ctx.Counter)
	} else {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("400 - Bad Request (This endpoint only accepts POST)"))
	}
}
