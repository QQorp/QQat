package routers

import (
	"github.com/QQorp/QQat/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/chat/", &controllers.ChatController{})
	ns := beego.NewNamespace("/api",
		beego.NSNamespace("/channel",
			beego.NSInclude(
				&controllers.ChannelController{},
			),
		),
	)
	beego.AddNamespace(ns)
}
