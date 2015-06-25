package models

import (
	"fmt"

	"github.com/nu7hatch/gouuid"
)

// Channel : Correponds to a Channel
type Channel struct {
	ChannelName string
	ChannelUID  string
}

// CreateChannel : Creates a channel and add it to redis
func CreateChannel(channelName string) (channel *Channel, err error) {
	channel = nil
	err = fmt.Errorf("Channel name cannot be empty")
	if channelName != "" {
		u, _ := uuid.NewV4()
		channel = &Channel{
			ChannelName: channelName,
			ChannelUID:  u.String(),
		}

		// No error until the end, setting err to nil for return
		err = nil
	}
	return channel, err
}
