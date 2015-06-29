package controllers

import (
	"os"

	"github.com/astaxie/beego"
)

type ChatController struct {
	beego.Controller
}

func (c *ChatController) Get() {
	h, eh := os.Hostname()
	if eh == nil {
		c.Data["Hostname"] = h
	}
	c.TplNames = "index.tpl"
}
