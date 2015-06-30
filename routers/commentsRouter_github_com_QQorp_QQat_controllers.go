package routers

import (
	"github.com/astaxie/beego"
)

func init() {
	
	beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:FakeChannelController"] = append(beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:FakeChannelController"],
		beego.ControllerComments{
			"Post",
			`/`,
			[]string{"post"},
			nil})

	beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:FakeChannelController"] = append(beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:FakeChannelController"],
		beego.ControllerComments{
			"Get",
			`/:uid`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:FakeChannelController"] = append(beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:FakeChannelController"],
		beego.ControllerComments{
			"GetAll",
			`/`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:FakeChannelController"] = append(beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:FakeChannelController"],
		beego.ControllerComments{
			"GetAllMessages",
			`/:uid/messages`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:ChannelController"] = append(beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:ChannelController"],
		beego.ControllerComments{
			"Post",
			`/`,
			[]string{"post"},
			nil})

	beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:ChannelController"] = append(beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:ChannelController"],
		beego.ControllerComments{
			"Get",
			`/:uid`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:ChannelController"] = append(beego.GlobalControllerRouter["github.com/QQorp/QQat/controllers:ChannelController"],
		beego.ControllerComments{
			"GetAll",
			`/`,
			[]string{"get"},
			nil})

}
