package server

import (
	"os"
)

type Context struct {
	Hub     *Hub
	Counter int
	API_URL string
	HOST    string
}

func NewContext() *Context {
	return &Context{
		Hub:     NewHub(),
		Counter: 0,
		API_URL: constructAPIUrl(),
		HOST:    constructHostUrl(),
	}
}

func constructHostUrl() string {
	return os.Getenv("TTI_HOST_ADDRESS")
}

func constructAPIUrl() string {
	return os.Getenv("TTI_HOST_ADDRESS") + "/v1"
}
