package controllers

import "github.com/QQorp/QQat/models"

// oprations for Channel
type FakeChannelController struct {
	ChannelController
}

// @Title Post
// @Description create Channel
// @Param	body		body 	models.Channel	true		"body for Channel content"
// @Success 200 {int} models.Channel.Id
// @Failure 403 body is empty
// @router / [post]
func (c *FakeChannelController) Post() {

}

// @Title Get
// @Description get Channel by uid
// @Param	uid		path 	string	true		"The key for staticblock"
// @Success 200 {object} models.Channel
// @Failure 403 :uid is empty
// @Failure 500 Channel does not exists
// @router /:uid [get]
func (this *FakeChannelController) Get() {
	uid := this.GetString(":uid")
	if uid == "" {
		this.CustomAbort(403, "UID cannot be empty")
	}

	channel := &models.Channel{}

	if uid == "AA-AA" {
		channel = &models.Channel{
			ChannelUID:  "AA-AA",
			ChannelName: "Channel one",
		}
	} else if uid == "BB-BB" {
		channel = &models.Channel{
			ChannelUID:  "BB-BB",
			ChannelName: "Channel two",
		}
	} else if uid == "CC-CC" {
		channel = &models.Channel{
			ChannelUID:  "CC-CC",
			ChannelName: "Channel three",
		}
	} else {
		this.CustomAbort(403, "Channel does not exists")
	}

	this.Data["json"] = channel
	this.ServeJson()
}

// @Title Get All
// @Description get Channel
// @Success 200 {object} models.Channel
// @Failure 403
// @router / [get]
func (this *FakeChannelController) GetAll() {
	channels := []*models.Channel{}

	channel1 := &models.Channel{
		ChannelUID:  "AA-AA",
		ChannelName: "Channel one",
	}
	channels = append(channels, channel1)

	channel2 := &models.Channel{
		ChannelUID:  "BB-BB",
		ChannelName: "Channel two",
	}
	channels = append(channels, channel2)

	channel3 := &models.Channel{
		ChannelUID:  "CC-CC",
		ChannelName: "Channel three",
	}
	channels = append(channels, channel3)

	this.Data["json"] = channels
	this.ServeJson()
}

type Message struct {
	Sender  string
	Content string
}

// @Title Get All messages
// @Description get all messages from a specific channel
// @Success 200 {object} models.Channel
// @Failure 403
// @router /:uid/messages [get]
func (this *FakeChannelController) GetAllMessages() {
	uid := this.GetString(":uid")
	if uid == "" {
		this.CustomAbort(403, "UID cannot be empty")
	}

	var messages []*Message

	if uid == "AA-AA" {
		var message *Message
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)
	} else if uid == "BB-BB" {
		var message *Message
		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)
	} else if uid == "CC-CC" {
		var message *Message
		message = &Message{
			Sender:  "B",
			Content: "B",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "C",
			Content: "C",
		}
		messages = append(messages, message)

		message = &Message{
			Sender:  "A",
			Content: "A",
		}
		messages = append(messages, message)
	} else {
		this.CustomAbort(403, "Channel does not exists")
	}

	this.Data["json"] = messages
	this.ServeJson()
}
