package routes

import (
	"../server"
	"html/template"
	"log"
	"net/http"
)

var indexTpl, tplErr = template.ParseFiles("./web/index.tpl")

type IndexHandler struct {
	Ctx *server.Context
}

type TemplateData struct {
	API_URL string
}

func (i IndexHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if tplErr != nil {
		log.Fatal(tplErr)
	}

	data := TemplateData{i.Ctx.API_URL}
	indexTpl.Execute(w, data)
}
