# TTI 

Exercise web application where users can collectively increase the value of a variable on the server with the press of a button.
Result is displayed and updated in realitme.


### How to run this program

- Download the latest zip from the [releases page](https://github.com/ghzmdr/TTI/releases)  
- Unzip in a directory of your choiche
- Run `go run server.go` from the root of the project (with `yarn` you can also run `yarn serve`)
- Navigate to [localhost:3000](http://localhost:3000) in your browser 

#### Rebuilding the frontend
- `yarn install`
- `yarn build`

#### Running the frontend in development mode
- `yarn develop`

### Requirements:

#### Go Server:

- Has an internal counter
- Serves static files
- Has `POST` endpoint to increase counter
- Has WebSocket to broadcast counter value

#### Frontend:

- React + Redux
- ES6 + JSX
- Reads value over WebSocket
- Has increase button that sends `POST`
- Looks nice, maybe with some CSS Framework
- Built with Webpack

___

### Phases

#### 0
- [x] Read trough Go tutorial [https://tour.golang.org/welcome/1](https://tour.golang.org/welcome/1)
- [x] Set up frontend boilerplate
- [x] Set up a simple static server
- [x] Have a minimal working environment
- [x] Setup releases including built files

#### 1
- [ ] WebSocket Endpoint
- [ ] WebSocket Connection
- [ ] POST Endpoint
- [ ] POST Action
- [ ] UI

#### 2
- [ ] Polish UI
- [ ] Wrap up code and make sure it's portable
- [ ] Release final version
