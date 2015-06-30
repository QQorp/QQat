FROM golang:1.4.2

# Moving to directory
WORKDIR $GOPATH/src/github.com/QQorp/QQat/

# Adding main/routers/controllers
ADD ./routers/ $GOPATH/src/github.com/QQorp/QQat/routers/
ADD ./controllers/ $GOPATH/src/github.com/QQorp/QQat/controllers/
ADD ./models/ $GOPATH/src/github.com/QQorp/QQat/models/
ADD ./main.go $GOPATH/src/github.com/QQorp/QQat/main.go

# Getting dependencies
RUN go get -t -d -v ./...
# Getting bee
RUN go get github.com/beego/bee

# Importing all files
ADD . $GOPATH/src/github.com/QQorp/QQat/

# Building application
RUN go build -v

# Binding entrypoint
ENTRYPOINT cd $GOPATH/src/github.com/QQorp/QQat && $GOPATH/bin/bee run

# Exposing port
EXPOSE 8000
