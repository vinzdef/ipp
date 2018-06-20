# TTI 

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

#### 1
- [ ] WebSocket Endpoint
- [ ] WebSocket Connection
- [ ] POST Endpoint
- [ ] POST Action
- [ ] UI

#### 2
- [ ] Polish UI
- [ ] Make sure code is portable
- [ ] Release as zip including built frontend
