# QQat
Un **truc puissant** pour faire **des machins de fou** ! _100% vrai ! _100% gratuit ! _0% caca de taureau !

## Qu'est-ce que QQat ?
QQat est un chat **crypté**, **fiable** et **doux** utilisant du chiffrement end-to-end.

## Technology
Le chat est composé de plusieurs couches :
- [ExpressJS](http://expressjs.com/)
  - Un framework Nodejs rapide et minimaliste

- [Socket.io](http://socket.io/)
  - Transmission de donnée facile
  - Cross-platform
  - Basé autour de la notion d'évènement
  - Peut envoyer des fichiers binaires (Files, Pictures, ...)

- [ElipticJS](https://github.com/indutny/elliptic)
  - Génère des clés elliptiques
  - Securité élevée

- [CryptoJS 3.1](https://code.google.com/p/crypto-js/)
  - Chiffrement
  - Dechiffrement
  - Hashage

- [React](https://facebook.github.io/react/)
  - La librairie de Facebook pour faire des interfaces

- [RequireJS](http://requirejs.org/)
- [SASS](http://sass-lang.com/)
- [Mocha](http://mochajs.org/)
  - Framework de test pour JavaScript

- [Mongoose](http://mongoosejs.com/)
  - Driver Nodejs pour MongoDB

## DevOps
Un serveur avec [Drone.io](drone.io) teste le serveur et le client à chaque build avec des tests d'intégration. Le serveur est connecté à un [GitHub](https://github.com/) via webhooks pour gérer le code et envoyer des notifications a Drone pour chacun des commit. Seul un serveur test et un serveur de production gère la version stable du logiciel pour permettre de montrer ce que QQat peut faire !

# License MIT
The MIT License (MIT)

Copyright (c) 2015 QQorp

Permission is hereby granted, free of charge, to any person obtaining a copy<br>of this software and associated documentation files (the "Software"), to deal<br>in the Software without restriction, including without limitation the rights<br>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br>copies of the Software, and to permit persons to whom the Software is<br>furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all<br>copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE<br>SOFTWARE.

# Contact
- [Kevin Bacas](https://github.com/KevinBacas)
- [Louis Delbosc](https://github.com/LouisDelbosc)

# Installer tout sur Docker
## /!\ **NE MARCHE PAS POUR LE MOMENT** /!\
### *Mise à jour prochaine*
Premièrement, il faut installer [Docker](https://docs.docker.com/installation/).

Puis build le projet :

```shell
docker build -t qqat .
```

Et enfin run le serveur :

```shell
docker run -p 3000:3000 qqat
```

# Installation
## Pré-requis
L'environnement de développement demande : [npm](https://www.npmjs.com/), [grunt](http://gruntjs.com/), [bower](http://bower.io/) et [MongoDB](https://www.mongodb.org/) now.

### Installer npm
[Télécharge](https://nodejs.org/download/) et installe sur ta plateform puis lance le !
Pour installer [proprement](https://www.joyent.com/blog/installing-node-and-npm/) Nodejs et npm.

### Installer grunt et bower
Après l'installation de npm, utilisez votre CLI préféré et écrit :

```shell
npm install -g grunt-cli
npm install -g bower
```

## Installer mongoose avec MangoDB
Une fois MongaDB installé sur l'ordinateur, il faut configurer le fichier **config.js** à la racine du projet. Vous pouvez le configurer comme ceci :

```javascript
module.exports = {
 "db": {
   "development": "mongodb://localhost/qqat-dev",
   "test": "mongodb://localhost/qqat-test",
   "production": "mongodb://user:pass@example.com/qqat-prod"
 }
};
```

## Installer l'application

```shell
git clone https://github.com/QQorp/QQat.git
cd QQat/
npm install --dev && bower install
grunt build
```

## Lancer le serveur
Lancez grunt et soyez prêt à bidouiller !

```shell
grunt
```

## Après avoir pull les modification :

```shell
# Mettre à jours les composants du projet
npm update && bower update
# Nettoyer et relancer le projet
grunt rebuild
```

# Lancer les tests

```shell
npm test
```
