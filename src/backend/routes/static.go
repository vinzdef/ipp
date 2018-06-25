package routes

import (
	"net/http"
)

var StaticHandler = http.FileServer(http.Dir("./web/static"))
