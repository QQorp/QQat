package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/garyburd/redigo/redis"
	"github.com/gorilla/mux"
	"github.com/nu7hatch/gouuid"
)

type uUID struct {
	Value string
}

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

func uuidHandler(rw http.ResponseWriter, r *http.Request) {
	c := pool.Get()
	defer c.Close()

	_, pingErr := c.Do("Ping")
	if pingErr != nil {
		fmt.Print("Error redis")
	}

	u, _ := uuid.NewV4()
	res := uUID{
		Value: u.String(),
	}

	json.NewEncoder(rw).Encode(res)
}

func main() {
	r := mux.NewRouter()
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./prod/")))

	// API
	api := r.PathPrefix("/api").Subrouter()

	// -- V1
	apiV1 := api.PathPrefix("/v1").Subrouter()
	apiV1Uuid := apiV1.PathPrefix("/uuid").Subrouter()
	apiV1Uuid.HandleFunc("/", uuidHandler)

	// Starting server
	http.Handle("/", r)
	http.ListenAndServe(":8000", nil)
}
