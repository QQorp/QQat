package test

import (
	"path/filepath"
	"runtime"
	"testing"

	"github.com/QQorp/QQat/models"
	"github.com/astaxie/beego"
	. "github.com/smartystreets/goconvey/convey"
)

func init() {
	_, file, _, _ := runtime.Caller(1)
	apppath, _ := filepath.Abs(filepath.Dir(filepath.Join(file, ".."+string(filepath.Separator))))
	beego.TestBeegoInit(apppath)
}

// TestMain is a sample to run an endpoint test
func TestChannel(t *testing.T) {
	Convey("Testing channel model", t, func() {
		Reset(ResetRedis)
		Convey("Testing CreateChannel", func() {
			Convey("Creating a channel with blank name, should return an error", func() {
				channel, err := models.CreateChannel("")

				So(channel, ShouldBeNil)
				So(err, ShouldNotBeNil)
			})
			Convey("Creating a channel with a name, should return a Channel", func() {
				channelName := "QQ"
				channel, err := models.CreateChannel(channelName)

				So(channel, ShouldNotBeNil)
				So(channel.ChannelName, ShouldEqual, channelName)
				So(err, ShouldBeNil)
			})
			Convey("Creating two channels with the same name, should return different channels", func() {
				channelName := "QQ"
				channel1, err1 := models.CreateChannel(channelName)
				channel2, err2 := models.CreateChannel(channelName)

				So(channel1, ShouldNotBeNil)
				So(channel2, ShouldNotBeNil)
				So(channel1.ChannelName, ShouldEqual, channelName)
				So(channel1.ChannelName, ShouldEqual, channel2.ChannelName)
				So(channel1.ChannelUID, ShouldNotEqual, channel2.ChannelUID)
				So(err1, ShouldBeNil)
				So(err2, ShouldBeNil)
			})
		})
		Convey("Testing GetChannel", func() {
			Convey("Getting channel with an empty string, should return error", func() {
				channel, err := models.GetChannel("")

				So(channel, ShouldBeNil)
				So(err, ShouldNotBeNil)
			})
			Convey("Getting channel that does not exists, should return error", func() {
				channel, err := models.GetChannel("AAA")

				So(channel, ShouldBeNil)
				So(err, ShouldNotBeNil)
			})
			Convey("Creating a channel and getting it, should return the channel", func() {
				channelName := "lel"
				createdChannel, _ := models.CreateChannel(channelName)
				channel, err := models.GetChannel(createdChannel.ChannelUID)

				So(channel, ShouldNotBeNil)
				So(err, ShouldBeNil)
				So(channel.ChannelName, ShouldEqual, channelName)
				So(channel.ChannelUID, ShouldEqual, createdChannel.ChannelUID)
			})
		})
		Convey("Testing GetAllChannels", func() {
			Convey("Getting all channels with 0 channels, should return empty array", func() {
				channels, err := models.GetAllChannels()

				So(channels, ShouldBeEmpty)
				So(err, ShouldBeNil)
			})
			Convey("Getting all channels with 1 channel created, should return array with 1 element", func() {
				models.CreateChannel("lel")
				channels, err := models.GetAllChannels()

				So(len(channels), ShouldEqual, 1)
				So(err, ShouldBeNil)
			})
			Convey("Getting all channels with 5 channels created, should return array with 5 elements", func() {
				var nbElements = 5
				for index := 0; index < nbElements; index++ {
					models.CreateChannel("lel")
				}
				channels, err := models.GetAllChannels()

				So(len(channels), ShouldEqual, nbElements)
				So(err, ShouldBeNil)
			})
			Convey("Getting all channels with 500 channels created, should return array with 500 elements", func() {
				var nbElements = 500
				for index := 0; index < nbElements; index++ {
					models.CreateChannel("lel")
				}
				channels, err := models.GetAllChannels()

				So(len(channels), ShouldEqual, nbElements)
				So(err, ShouldBeNil)
			})
			Convey("Getting all channels with 1000 channels created, should return array with 1000 elements", func() {
				var nbElements = 1000
				for index := 0; index < nbElements; index++ {
					models.CreateChannel("lel")
				}
				channels, err := models.GetAllChannels()

				So(len(channels), ShouldEqual, nbElements)
				So(err, ShouldBeNil)
			})
		})
	})
}
