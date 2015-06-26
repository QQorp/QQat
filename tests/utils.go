package test

import (
	. "github.com/QQorp/QQat/models"
)

// ResetRedis : Reset redis database
func ResetRedis() {
	c := RedisPool.Get()
	defer c.Close()

	c.Do("FLUSHDB")
}
