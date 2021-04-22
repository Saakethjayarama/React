# React hooks

## useState

- The argument passed to useState is the actual initial state, the data that will be subject to changes. useState returns for you two bindings
  - the actual value of the state
  - the state updater functioin for said state

## useEffect

- useEffect will run after the render is committed to the screen.
- you can choose to fire them only when certain values have changed.
- useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. React will always flush a previous render’s effects before starting a new update.
- The default behavior for effects is to fire the effect after every completed render. That way an effect is always recreated if one of its dependencies changes.
- pass a second argument to useEffect that is the array of values that the effect depends on

## useContext
