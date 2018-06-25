package server

import (
	"log"
	"time"

	"github.com/gorilla/websocket"
)

const (
	writeWait      = 10 * time.Second
	pongWait       = 60 * time.Second
	pingPeriod     = (pongWait * 9) / 10
	maxMessageSize = 512
)

type Client struct {
	conn *websocket.Conn
	Send chan []byte
	Hub  *Hub //needs link to hub to signal itself on the unregister channel
}

func (c *Client) ReadPump() {

	defer func() {
		c.Hub.Unregister <- c
		c.conn.Close()
		log.Printf("[+] {ReadPump} Closed: %d", c)
	}()

	c.conn.SetReadLimit(maxMessageSize)
	c.conn.SetReadDeadline(time.Now().Add(pongWait))
	c.conn.SetPongHandler(func(string) error { c.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil })

	// I don't need incoming messages but this needs to run until an erroneous read happens
	// or the connection will be closed by the deferred.
	// I could just drop both this loop and the deferred but I may need to interpret
	// that erroneous read from websocket as connection closed
	for {
		_, _, err := c.conn.ReadMessage()

		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("[!] WebSocket Connection Error: %v", err)
			}

			break //runs deferred cleanup
		}
	}
}

func (c *Client) WritePump() {
	ticker := time.NewTicker(pingPeriod)

	defer func() {
		ticker.Stop()
		c.conn.Close()
		log.Printf("[+] {WritePump} Closed: %d", c)
	}()

	for {
		select {
		case message, ok := <-c.Send: //Client received a message
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))

			if !ok {
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := c.conn.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}

			w.Write(message)

			if err := w.Close(); err != nil {
				return
			}
		case <-ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

func NewClient(conn *websocket.Conn, hub *Hub) *Client {
	return &Client{
		conn: conn,
		Hub:  hub,
		Send: make(chan []byte, 256),
	}
}
