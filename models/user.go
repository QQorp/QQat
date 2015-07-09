package models

import (
	"fmt"

	"github.com/garyburd/redigo/redis"
	"github.com/nu7hatch/gouuid"
)

// User : Represents a user into the system
type User struct {
	Name string
	UID  string
}

// CreateUser : Creates an user and add it to redis
func CreateUser(username string) (*User, error) {
	if username != "" {
		u, err := uuid.NewV4()
		if err == nil {
			user := &User{
				Name: username,
				UID:  u.String(),
			}

			// Adding channel to Redis
			c := RedisPool.Get()
			defer c.Close()

			_, err := c.Do("SADD", "Users", user.UID)
			if err == nil {
				_, err := c.Do("HSET", user.UID, "Name", user.Name)
				if err == nil {
					return user, nil
				}
				return nil, fmt.Errorf("Cannot set the user name")
			}
			return nil, fmt.Errorf("Cannot add the user")
		}
		return nil, fmt.Errorf("Cannot create UID")
	}

	return nil, fmt.Errorf("User's name cannot be empty")
}

// GetUser : Returns an user if exists
func GetUser(UID string) (*User, error) {
	if UID != "" {
		c := RedisPool.Get()
		defer c.Close()

		foundNumber, err := redis.Int(c.Do("SISMEMBER", "Users", UID))
		if err == nil && foundNumber == 1 {
			username, err := redis.String(c.Do("HGET", UID, "Name"))
			if err == nil {
				user := &User{
					UID:  UID,
					Name: username,
				}
				return user, nil
			}
			return nil, fmt.Errorf("Cannot get username")
		}
		return nil, fmt.Errorf("User does not exists")
	}
	return nil, fmt.Errorf("UID not provided")
}

// GetAllUsers : Returns all users
func GetAllUsers() ([]*User, error) {
	c := RedisPool.Get()
	defer c.Close()

	usersName, err := redis.Strings(c.Do("SMEMBERS", "Users"))
	if err == nil {
		var res []*User
		for _, item := range usersName {
			user, err := GetUser(item)
			if err != nil {
				return nil, err
			}
			res = append(res, user)
		}
		return res, nil
	}
	return nil, fmt.Errorf("Cannot get all users")
}

// RemoveUser : Remove an user if exists
func RemoveUser(UID string) error {
	if UID != "" {
		c := RedisPool.Get()
		defer c.Close()

		foundNumber, err := redis.Int(c.Do("SISMEMBER", "Users", UID))
		if err == nil && foundNumber == 1 {
			redis.String(c.Do("SREM", "Users", UID))
			redis.String(c.Do("HDEL", UID, "Name"))
			return nil
		}
		return fmt.Errorf("User does not exists")
	}
	return fmt.Errorf("UID not provided")
}
