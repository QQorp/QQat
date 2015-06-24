FROM golang:1.4.2

# Install NPM
RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get install -y nodejs
RUN curl -L https://www.npmjs.com/install.sh | sh

# Moving to directory
WORKDIR /go/src/github.com/QQorp/QQat/

# Install QQat
ADD ./main.go /go/src/github.com/QQorp/QQat/main.go
RUN go get

# Installing npm dependencies
ADD ./package.json /go/src/github.com/QQorp/QQat/package.json
RUN npm install

ADD . /go/src/github.com/QQorp/QQat/
RUN go build

# Binding entrypoint
ENTRYPOINT /go/src/github.com/QQorp/QQat/QQat

# Exposing port
EXPOSE 8000
