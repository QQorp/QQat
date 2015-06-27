package controllers

import (
	"github.com/QQorp/QQat/models"
	"github.com/astaxie/beego"
)

// oprations for Channel
type ChannelController struct {
	beego.Controller
}

type HelloResponse struct {
	Message string
}

// @Title Post
// @Description create Channel
// @Param	body		body 	models.Channel	true		"body for Channel content"
// @Success 200 {int} models.Channel.Id
// @Failure 403 body is empty
// @router / [post]
func (c *ChannelController) Post() {

}

// @Title Get
// @Description get Channel by uid
// @Param	uid		path 	string	true		"The key for staticblock"
// @Success 200 {object} models.Channel
// @Failure 403 :uid is empty
// @Failure 500 Channel does not exists
// @router /:uid [get]
func (this *ChannelController) Get() {
	uid := this.GetString(":uid")
	if uid == "" {
		this.CustomAbort(403, "UID cannot be empty")
	}

	channel, err := models.GetChannel(uid)
	if err != nil {
		this.CustomAbort(403, err.Error())
	}

	this.Data["json"] = channel
	this.ServeJson()
}

// @Title Get All
// @Description get Channel
// @Param	query	query	string	false	"Filter. e.g. col1:v1,col2:v2 ..."
// @Param	fields	query	string	false	"Fields returned. e.g. col1,col2 ..."
// @Param	sortby	query	string	false	"Sorted-by fields. e.g. col1,col2 ..."
// @Param	order	query	string	false	"Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ..."
// @Param	limit	query	string	false	"Limit the size of result set. Must be an integer"
// @Param	offset	query	string	false	"Start position of result set. Must be an integer"
// @Success 200 {object} models.Channel
// @Failure 403
// @router / [get]
func (this *ChannelController) GetAll() {
	channels, err := models.GetAllChannels()
	if err == nil {
		this.Data["json"] = channels
	} else {
		this.CustomAbort(500, err.Error())
	}
	this.ServeJson()
}
