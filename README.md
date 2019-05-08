# React_PWA_boilerplate

A simple boilerplate for a progressive-web-app MERN application. <br/>
<br/>
The server-side is based on express and initially only consists of one example route at "api/example"
it can be easily configured to:<br/>

- use mongoDB via mongoose as a backend
- add indefinite routes
- and all known possibilities of express

The client-side is initially configured to:<br/>

- include PWA necessary files, like:
  - manifest.json, manifest.webapp
  - browserconfig.xml
  - favicon.ico
  - icons for almost all known OS's
- service worker for offline use
- image comporession and webp conversion
- brotli compression with fallback to gzip

## Usage

<br/>
### Cloning the Project
first clone the repository with:<br/>
<br/>
SSH: "git clone git@github.com:Vindao/MERN_boilerplate.git"<br/>
HTTPS: "git clone https://github.com/Vindao/MERN_boilerplate.git"<br/>
<br/>
Then cd into the project and open it in your favirote editor.<br/>
<br/>
### Install dependencies
To install all dependecies, open a terminal and run:<br/>
"npm run install:all" to install all dependencies, including the build dependencies at the root folder, the dependecies for the client side, and the server side.<br/>
<br/>
Alternatively you can install all the environments separately with:<br/>
"npm i" for build dependencies,<br/>
"npm run install:client" for client dependecies, and<br/>
"npm run install:server" for server dependencies.<br/>
<br/>
### Start development environments
To start the development script simply open a terminal and type:<br/>
"npm start" to start the development server, and client.<br/>
<br/>
Alternatively you can start only the server or the client by running:<br/>
"npm run start:server" or "npm run start:client" respectively.<br/>
<br/>
### Build the project for production
To build the project you can run the build script by:<br/>
"npm run build" to build the server and client.<br/>
<br/>
Alternatively you can build only the server or client by running:<br/>
"npm run build:server" or "npm run build:client" respectively.
