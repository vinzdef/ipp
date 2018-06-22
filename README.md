# TTI 

Exercise web application where users can collectively increase the value of a variable on the server with the press of a button.
Result is displayed and updated in realitme.


### How to run this program

- Download the latest zip from the [releases page](https://github.com/ghzmdr/TTI/releases)  
- Unzip in a directory of your choiche
- Run `./output/backend` from the root of the project (with `yarn` you can also run `yarn start`)
- Navigate to [localhost:3000](http://localhost:3000) in your browser

#### Development mode 
- `yarn develop:frontend`
- `yarn develop:backend`

This will serve the web app under `:8080` (trough Webpack Dev Server)

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
- [ ] Polish UI and server code
- [ ] Ensure portability
- [ ] Release final version
