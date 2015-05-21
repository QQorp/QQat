FROM joaodubas/nodejs
RUN apt-get update -qq
RUN npm install -g bower
RUN npm install -g grunt-cli
RUN mkdir /myapp
WORKDIR /myapp
ADD package.json /myapp/package.json
RUN npm install
ADD bower.json /myapp/bower.json
RUN bower install --allow-root
ADD . /myapp
RUN grunt build

CMD ["grunt"]
