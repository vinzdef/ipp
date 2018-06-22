package server

import "log"

type Hub struct {
	Clients    map[*Client]bool // A map whose keys are Client ptrs and values are status flags
	Broadcast  chan []byte
	register   chan *Client
	unregister chan *Client
}

func (h *Hub) Run() {
	for {
		select {
		case client := <-h.register:
			h.Clients[client] = true
		case client := <-h.unregister:
			if _, ok := h.Clients[client]; ok {
				close(client.send)
				delete(h.Clients, client)
			}
		case value := <-h.Broadcast:
			for client := range h.Clients {
				select {
				case client.send <- value: //Just send
				default: //Prune dead clients
					log.Printf("[+] {DeadClient} Pruned: %d", client)
					close(client.send)
					delete(h.Clients, client)
				}
			}
		}
	}

}

func NewHub() *Hub {
	return &Hub{
		Clients:    make(map[*Client]bool),
		Broadcast:  make(chan []byte),
		register:   make(chan *Client),
		unregister: make(chan *Client),
	}
}
