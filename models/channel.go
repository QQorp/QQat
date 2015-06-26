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
func CreateChannel(channelName string) (*Channel, error) {
	if channelName != "" {
		u, err := uuid.NewV4()
		if err == nil {
			channel := &Channel{
				ChannelName: channelName,
				ChannelUID:  u.String(),
			}

			// Adding channel to Redis
			c := RedisPool.Get()
			defer c.Close()

			_, err := c.Do("SADD", "Channels", "Channel:"+channel.ChannelUID)
			if err == nil {
				_, err := c.Do("HMSET", "Channel:"+channel.ChannelUID, "Name", channel.ChannelName)
				if err == nil {
					return channel, nil
				}
			}
		}
		return nil, err
	}

	return nil, fmt.Errorf("Channel's name cannot be empty")
}
