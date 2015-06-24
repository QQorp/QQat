FROM golang:1.4.2

# Install NPM
RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get install -y nodejs
RUN curl -L https://www.npmjs.com/install.sh | sh

# Moving to directory
WORKDIR /go/src/github.com/QQorp/QQat/

# Install QQat
ADD . /go/src/github.com/QQorp/QQat/

RUN go get

RUN go build

# Installing npm dependencies
RUN npm install

# Binding entrypoint
ENTRYPOINT /go/src/github.com/QQorp/QQat/QQat

# Exposing port
EXPOSE 8000
