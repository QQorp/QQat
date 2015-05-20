# QQat
A **powerfull thing** to do **insane stuff** ! _100% true_ ! _100% free_ ! _0% bullshit_ !

## What is QQat ?
QQat is a personnal end-to-end **OTR encrypted chat**, **reliable**, **sexy** and **soft**.

## Technologies
The chat will be build on multiple layers :
- [ExpressJS](http://expressjs.com/)
  - Fast, unopinionated, minimalist web framework for Node.js

- [Socket.io](http://socket.io/)
  - Easy tranmission of data
  - Cross-platform
  - Event-based
  - Can send binaries (Files, Pictures, ...)

- [ElipticJS](https://github.com/indutny/elliptic)
  - Generates key with curves
  - High security

- [CryptoJS 3.1](https://code.google.com/p/crypto-js/)
  - Encryption
  - Decryption
  - Hash

- [React](https://facebook.github.io/react/)
  - Facebook's front-end engine

- [RequireJS](http://requirejs.org/)
- [SASS](http://sass-lang.com/)
- [Mocha](http://mochajs.org/)
  - Javascript test framework

## DevOps
A server with [Drone.io](drone.io) test the server and the client side on each build as integration test. This server is connected to a [GitHub](https://github.com/) via webhooks to handle the code and send notification to drone on each commit. A single test server and a single production server handling a stable version of the software in order to demonstrate what QQat can do !

# Under MIT License
The MIT License (MIT)

Copyright (c) 2015 QQorp

Permission is hereby granted, free of charge, to any person obtaining a copy<br>of this software and associated documentation files (the "Software"), to deal<br>in the Software without restriction, including without limitation the rights<br>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br>copies of the Software, and to permit persons to whom the Software is<br>furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all<br>copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE<br>SOFTWARE.

# Contact
- [Kevin Bacas](https://github.com/KevinBacas)
- [Louis Delbosc](https://github.com/LouisDelbosc)

# How to contribute to the project
## Requirements
The development environment requires [npm](https://www.npmjs.com/), [grunt](http://gruntjs.com/) and [bower](http://bower.io/).

### Intalling npm
Go to [this website](https://nodejs.org/download/) and download the installer for you platform and then, run it !

### Installing grunt and bower
After installing npm take you favorite CLI and type :

```shell
npm install -g grunt-cli
npm install -g bower
```

## Installing the application

```shell
git clone https://github.com/QQorp/QQat.git
cd QQat/
npm install --dev && bower install
grunt build
```

## Running the server
Run grunt and get ready to hack !

```shell
grunt
```

## After pulling a modification

```shell
npm update && bower update
grunt rebuild
```
