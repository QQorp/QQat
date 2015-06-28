package controllers

import (
	"os"

	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	h, eh := os.Hostname()
	if eh == nil {
		c.Data["Hostname"] = h
	}
	c.TplNames = "welcome.tpl"
}
