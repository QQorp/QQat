package models

import (
	"fmt"

	"github.com/garyburd/redigo/redis"
	"github.com/nu7hatch/gouuid"
)

func newPool() *redis.Pool {
	return &redis.Pool{
		MaxIdle:   80,
		MaxActive: 12000,
		Dial: func() (redis.Conn, error) {
			c, err := redis.Dial("tcp", ":6379")
			if err != nil {
				panic(err.Error())
			}
			return c, err
		},
	}
}

var pool = newPool()

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
			c := pool.Get()
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
