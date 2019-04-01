
package main

import (
    "fmt"
    "log"
    "net/http"
    "time"
)

// handler takes an http.ResponseWriter and an http.Request as its arguments
// http.ResponseWriter value assembles the HTTP server's response; by writing to 
// it, we send data to the HTTP client
// http.Request is a data structure that represents the client HTTP request. 
// r.URL.Path is the path component of the request URL. The trailing [1:] means
// "create a sub-slice of Path from the 1st character to the end." This drops the leading "/" from the path name
func handler(w http.ResponseWriter, r *http.Request) {
    str := "2019-03-31T11:45:26.371Z"
    startDate, err := time.Parse(time.RFC3339, str)
    if err != nil {
       // fmt.Println(err)
    }
    // startDate := time.Parse(date)
    finishDate := startDate.AddDate(0, 0, 100)
    //fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
    fmt.Fprintf(w, "I started my #100DaysOfCode challenge on ")
    fmt.Fprintf(w, startDate.Format("2006-01-02"))
    fmt.Fprintf(w, " and will finish it on ")
    fmt.Fprintf(w, finishDate.Format("2006-01-02"))
    fmt.Fprintf(w, "!")

}

func hello() {
    fmt.Println("Hello, Guys")
    }

// main function begins with a call to http.HandleFunc, which 
// tells the http package to handle all requests to the web root ("/") with handler
// then calls http.ListenAndServe, specifying that it should listen on port 8080
// ListenAndServe always returns an error, since it only returns when an unexpected
// error occurs. In order to log that error we wrap the function call with log.Fatal
func main() {
    http.HandleFunc("/", handler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}