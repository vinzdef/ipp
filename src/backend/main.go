package main

import (
	"./routes"
	"./server"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	ctx := server.NewContext()
	router := mux.NewRouter()

	// WEB
	router.Handle("/", routes.IndexHandler{Ctx: ctx})
	router.PathPrefix("/static/").Handler(
		http.StripPrefix("/static/", routes.StaticHandler),
	)

	// API
	router.Handle("/v1/websocket", routes.WebSocketHandler{ctx})
	router.Handle("/v1/increase", routes.IncreaseHandler{Ctx: ctx}).Methods("POST")
	router.Handle("/v1/reset", routes.ResetHandler{ctx}).Methods("POST")

	http.Handle("/", router)

	go ctx.Hub.Run()

	log.Println("[+] Server Listening on ", ctx.HOST)
	http.ListenAndServe(ctx.HOST, nil)
}
