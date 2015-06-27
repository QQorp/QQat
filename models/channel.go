package models

import (
	"fmt"

	"github.com/garyburd/redigo/redis"
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

			_, err := c.Do("SADD", "Channels", channel.ChannelUID)
			if err == nil {
				_, err := c.Do("HSET", channel.ChannelUID, "Name", channel.ChannelName)
				if err == nil {
					return channel, nil
				}
				return nil, fmt.Errorf("Cannot set the channel name")
			}
			return nil, fmt.Errorf("Cannot add the channel")
		}
		return nil, fmt.Errorf("Cannot create UID")
	}

	return nil, fmt.Errorf("Channel's name cannot be empty")
}

// GetChannel : Returns a channel if exists
func GetChannel(channelUID string) (*Channel, error) {
	if channelUID != "" {
		c := RedisPool.Get()
		defer c.Close()

		foundNumber, err := redis.Int(c.Do("SISMEMBER", "Channels", channelUID))
		if err == nil && foundNumber == 1 {
			channelName, err := redis.String(c.Do("HGET", channelUID, "Name"))
			if err == nil {
				channel := &Channel{
					ChannelUID:  channelUID,
					ChannelName: channelName,
				}
				return channel, nil
			}
			return nil, fmt.Errorf("Cannot get channel name")
		}
		return nil, fmt.Errorf("Channel does not exists")
	}
	return nil, fmt.Errorf("ChannelUID not provided")
}

// GetAllChannels : Returns all the channels
func GetAllChannels() ([]*Channel, error) {
	c := RedisPool.Get()
	defer c.Close()

	channelsName, err := redis.Strings(c.Do("SMEMBERS", "Channels"))
	if err == nil {
		var res []*Channel
		for _, item := range channelsName {
			channel, err := GetChannel(item)
			if err != nil {
				return nil, err
			}
			res = append(res, channel)
		}
		return res, nil
	}
	return nil, fmt.Errorf("Cannot get all channels")
}
