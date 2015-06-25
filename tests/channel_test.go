package test

import (
	"path/filepath"
	"runtime"
	"testing"

	. "github.com/QQorp/QQat/models"
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
		Convey("Creating a channel with blank name, should return an error", func() {
			channel, err := CreateChannel("")

			So(channel, ShouldBeNil)
			So(err, ShouldNotBeNil)
		})
		Convey("Creating a channel with a name, should return a Channel", func() {
			channelName := "QQ"
			channel, err := CreateChannel(channelName)

			So(channel, ShouldNotBeNil)
			So(channel.ChannelName, ShouldEqual, channelName)
			So(err, ShouldBeNil)
		})
		Convey("Creating two channels with the same name, should return different channels", func() {
			channelName := "QQ"
			channel1, err1 := CreateChannel(channelName)
			channel2, err2 := CreateChannel(channelName)

			So(channel1, ShouldNotBeNil)
			So(channel2, ShouldNotBeNil)
			So(channel1.ChannelName, ShouldEqual, channelName)
			So(channel1.ChannelName, ShouldEqual, channel2.ChannelName)
			So(channel1.ChannelUID, ShouldNotEqual, channel2.ChannelUID)
			So(err1, ShouldBeNil)
			So(err2, ShouldBeNil)
		})
	})
}
