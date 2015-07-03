[![Circle CI](https://circleci.com/gh/QQorp/QQat/tree/master.svg?style=svg)](https://circleci.com/gh/QQorp/QQat/tree/master)

# QQat
A **powerfull thing** to do **insane stuff** ! _100% true_ ! _100% free_ ! _0% bullshit_ ! :+1:

## What is QQat ?
QQat is a personnal end-to-end **OTR encrypted chat**, **reliable**, **sexy** and **soft**. :sunglasses:


# How to run the server
## Run with ```go```
**Requirements** :
- Go installed with $GOPATH and $GOROOT set
- Redis server running (You can also run it with ```docker run -d -p 6379:6379 redis```)

```shell
go get github.com/QQorp/QQat
cd $GOPATH/src/github.com/QQorp/QQat/
go build
./QQat
```

You can access QQat from http://127.0.0.1:8000/

## Run with ```docker```
**Requirements** :
- Docker installed
- Docker Compose installed
- A warm coffee :coffee:

```shell
docker-compose build
docker-compose up -d
```
The current setup for Docker Compose is :
- **nginx** as reverse proxy
- **haproxy** as loadbalancer
- web instance of **QQat**
- **redis** server

You can access QQat from http://127.0.0.1:3000/

# Run tests
## Back-end
```go test -v ./tests/...```

## Front-end
*Not implemented yet*

# How to contribute
```shell
go get github.com/QQorp/QQat
cd $GOPATH/src/github.com/QQorp/QQat
npm install
```
You can now edit files, the architecture looks like that :
- front-src (development folder)
  - js (JS files, with React-components)
  - sass (SCSS files that will be preprossessed)

While you are developping you can type de command ```gulp run``` to run all the services in dev. Before committing you should do ```gulp``` to compile all assets in production mod.

## Technologies
- Back-end
  - Golang
  - beeGo framework
  - Redis
  - GoConvey
- Front-end
  - React
  - Bootstrap
  - PeerJS
- Front-end packaging
  - Webpack
  - Gulp

## DevOps
- CircleCI
- Slack

# Under MIT License
The MIT License (MIT)

Copyright (c) 2015 QQorp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Contact
- [Kevin Bacas](https://github.com/KevinBacas)
- [Louis Delbosc](https://github.com/LouisDelbosc)
