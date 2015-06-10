package main

import "net/http"

func main() {
	http.Handle("/", http.FileServer(http.Dir("prod")))
	http.ListenAndServe(":8000", nil)
}
