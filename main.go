package main

import "net/http"

func main() {
	http.Handle("/", http.FileServer(http.Dir("src")))
	http.ListenAndServe(":8000", nil)
}
