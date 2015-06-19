FROM golang:1.4.2

# Install NPM
RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get install -y nodejs
RUN curl -L https://www.npmjs.com/install.sh | sh

# Install QQat
RUN go get github.com/QQorp/QQat

# Moving to directory
WORKDIR /go/src/github.com/QQorp/QQat

# Installing npm dependencies
RUN npm install

# Building app
RUN go build main.go

# Binding entrypoint
ENTRYPOINT /go/src/github.com/QQorp/QQat/main

# Exposing port
EXPOSE 8000
