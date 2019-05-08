# React_PWA_boilerplate

A simple boilerplate for a progressive-web-app MERN application. <br/>
<br/>
The server-side is based on express and initially only consists of one example route at "api/example"
it can be easily configured to:<br/>

- use mongoDB via mongoose as a backend
- add indefinite routes
- HTTPS
- HTTP to HTTPS
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

<h3> Cloning the Project </h3>
first clone the repository with:<br/>
<br/>
SSH: <code>"git clone git@github.com:Vindao/MERN_boilerplate.git"</code><br/>
HTTPS: <code>"git clone https://github.com/Vindao/MERN_boilerplate.git"</code><br/>
<br/>
Then cd into the project and open it in your favirote editor.<br/>
<h3>Installing dependencies</h3>
To install all dependecies, open a terminal and run:<br/>
<code>"npm run install:all"</code> to install all dependencies, including the build dependencies at the root folder, the dependecies for the client side, and the server side.<br/>
<br/>
Alternatively you can install all the environments separately with:<br/>
<code>"npm i"</code> for build dependencies,<br/>
<code>"npm run install:client"</code> for client dependecies, and<br/>
<code>"npm run install:server"</code> for server dependencies.<br/>
<h3>Start development environments</h3>
To start the development script simply open a terminal and type:<br/>
<code>"npm start"</code> to start the development server, and client.<br/>
<br/>
Alternatively you can start only the server or the client by running:<br/>
<code>"npm run start:server"</code> or <code>"npm run start:client"</code> respectively.<br/>
<h3>Build the project for production</h3>
To build the project you can run the build script by:<br/>
<code>"npm run build"</code> to build the server and client.<br/>
<br/>
Alternatively you can build only the server or client by running:<br/>
<code>"npm run build:server"</code> or <code>"npm run build:client"</code> respectively.
