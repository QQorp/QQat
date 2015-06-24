package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/garyburd/redigo/redis"
	"github.com/gorilla/mux"
	"github.com/nu7hatch/gouuid"
)

type uUID struct {
	Value string
}

type hostname struct {
	Name string
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

func homeHandler(rw http.ResponseWriter, r *http.Request) {
	file, err := ioutil.ReadFile("prod/index.html")
	if err != nil {
		panic(err)
	}
	rw.Write(file)
}

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

func hostnameHandler(rw http.ResponseWriter, r *http.Request) {
	h := os.Getenv("HOSTNAME")
	res := hostname{
		Name: h,
	}

	json.NewEncoder(rw).Encode(res)
}

func main() {
	r := mux.NewRouter()
	r.Path("/").HandlerFunc(homeHandler)
	r.Path("/hostname").HandlerFunc(hostnameHandler)

	// API
	api := r.PathPrefix("/api").Subrouter()

	// -- V1
	apiV1 := api.PathPrefix("/v1").Subrouter()
	apiV1Uuid := apiV1.PathPrefix("/uuid").Subrouter()
	apiV1Uuid.HandleFunc("/", uuidHandler)

	// Starting server
	http.Handle("/", r)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./prod/"))))
	http.ListenAndServe(":8000", nil)
}
