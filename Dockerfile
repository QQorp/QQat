FROM golang:1.4.2

# Install NPM
RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get install -y nodejs
RUN curl -L https://www.npmjs.com/install.sh | sh

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
# Adding package.json
ADD ./package.json $GOPATH/src/github.com/QQorp/QQat/package.json
# Installing npm dependencies
RUN npm install

# Importing all files
ADD . $GOPATH/src/github.com/QQorp/QQat/

# Building application
RUN go build -v



# Binding entrypoint
ENTRYPOINT cd $GOPATH/src/github.com/QQorp/QQat && $GOPATH/bin/bee run

# Exposing port
EXPOSE 8000
