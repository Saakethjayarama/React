# Core concept of Redux

- A store holds the state of your application.
- An action that describes the changes in the state of the application.
- A reducer which actually carries out the state transition depending on the action.

# principles of redux

- The state of your whole application is sotred in an object tree within a single store
  - Maintain our applicaiton state in a asingle object whihc would be mangaged by the redux store
- The only way to change the state is to emit an action, an object describin what happened
  - To update the state of your app, you needc to let redux know about that with an action.
  - Not allowed to directly update the state object.
- To specify how the state tree is transformed by actions. you write pure reducers
  - reducer = (prevstate, action) => newState;

# Actions

- The only way your application can interact with the store
- Carry some info from your app tot the redux store
- plain javascript objects
- have a type property that indicates the type of action being performded
- the type property is typically defined as string constants.

# Reducers

- Specify how the app's state changes in response to actions sent to the store
- Function that accepts state and action as arguments, and returns the next state of the application (prevState, action) => newState;

# Redux Store(Single source of truth)

- One store for the entire application.
- Responsibilites:-
  - Holds application state
  - Allows access to state via getState()
  - Allows state to be update via dispatch(action)
  - Registers listeners via subscribe(listener)
  - Handles unregistering of listeners via the function returned by subscribe(listener)

# Middleware

- Is the suggested way to extend Redux with custom functionality
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
- Use middleware for logging, crash reporting, performing async tasks.etc

# redux - logger

- This middleware is used to log everything related to redux in application

# Actions

## Synchronous Actions

- As soon as an action was dipatched, the state was immediately updated

## Asynchronous Actions

- Asynchronous API calls to fetch data from an end point and use that data in your application.
