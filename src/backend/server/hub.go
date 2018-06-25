package server

import "log"

type Hub struct {
	Clients   map[*Client]bool // A map whose keys are Client ptrs and values are status flags
	Broadcast chan []byte

	Register   chan *Client
	Unregister chan *Client
}

func (h *Hub) Run() {
	for {
		select {
		case client := <-h.Register:
			h.Clients[client] = true
		case client := <-h.Unregister:
			if _, ok := h.Clients[client]; ok {
				close(client.Send)
				delete(h.Clients, client)
			}
		case value := <-h.Broadcast:
			for client := range h.Clients {
				select {
				case client.Send <- value: //Just send
				default: //Prune dead clients
					log.Printf("[+] {DeadClient} Pruned: %d", client)
					close(client.Send)
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
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
	}
}
