# I++ 

Exercise web application where users can collectively increase the value of a counter on the server.


Server is in Go, Frontend in React.
Communication is managed via WebSockets.


### How to run this program locally

- Download the latest zip from the [releases page](https://github.com/ghzmdr/TTI/releases)  
- Unzip in a directory of your choiche
- Source `.env.local` Run `./output/backend` from the root of the project (or `yarn start:local`)
- Navigate to [localhost:3000](http://localhost:3000) in your browser


A minimal frontend is also exposed at `[http://localhost:3000/static/minimal.html]`(http://localhost:3000/minimal.html)

#### Development mode 
- `yarn develop:frontend`
- `yarn develop:backend`

This will serve the web app under `[//localhost:8080](//localhost:8080)` (trough Webpack Dev Server)
And the normal API + Static under `[//localhost:3000](//localhost:3000)` 

#### Building 
- `yarn install`
- `yarn build:frontend`
- `yarn build:backend`


___

### Requirements:

#### Go Server:

- Has an internal counter
- Serves static files
- Has `POST` endpoint to increase counter
- Has WebSocket to broadcast counter value
- Host address is ser via env variables

#### Frontend:

- React + Redux
- ES6 + JSX
- Reads value over WebSocket
- Has increase button that sends `POST`
- Looks nice, maybe with some CSS Framework
- Built with Webpack
- Has indicator for connection status
- Handles connection close gracefully 

___

### Phases

#### 0
- [x] Set up frontend boilerplate
- [x] Set up a simple static server
- [x] Have a minimal working environment
- [x] Setup releases including built files

#### 1
- [x] WebSocket Endpoint Handler
- [x] WebSocket Connection Handler
- [x] POST Endpoint
- [x] POST Action
- [x] UI

#### 2
- [x] Polish UI and server code
- [x] Ensure portability
- [x] Release V1


##### 2.1
- [x] Add reset endpoint and gui


#### 3
- [x] Refactor backend code for modularity
- [x] Allow address configuration from env variables
- [x] Seamlessly integrate change in frontend
- [X] Display a websocket status indicator
- [X] Handle disconnection gracefully

___

### Learning material

- [Gorilla Chat Example](https://github.com/gorilla/websocket/tree/master/examples/chat)
- [The Little Go Book](http://openmymind.net/The-Little-Go-Book/)
- [Concurrency patterns in Go](https://www.youtube.com/watch?v=YEKjSzIwAdA)
