# Hooks

# React

## useState

```
import React, { useState } from "react";
```

- The argument passed to useState is the actual initial state, the data that will be subject to changes. useState returns for you two bindings
  - the actual value of the state
  - the state updater functioin for said state

## useEffect

```
import React, { useEffect } from "react";
```

- useEffect will run after the render is committed to the screen.
- you can choose to fire them only when certain values have changed.
- useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. React will always flush a previous render’s effects before starting a new update.
- The default behavior for effects is to fire the effect after every completed render. That way an effect is always recreated if one of its dependencies changes.
- pass a second argument to useEffect that is the array of values that the effect depends on

## useContext

```
import React, { useContext } from "react";
```

- Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

- When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.

```
Correct: useContext(MyContext)
Incorrect: useContext(MyContext.Consumer)
Incorrect: useContext(MyContext.Provider)
```

# react-redux

## useSelector

- The selector is approximately equivalent to the mapStateToProps argument to connect conceptually
- The selector will be called with the entire Redux store state as its only argument.
- The selector will be run whenever the function component renders
- useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.
  -When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the current result value. If they are different, the component will be forced to re-render. If they are the same, the component will not re-render.

```
import {useSelector} from 'react-redux';
```

## useDispatch

- useDispatch returns a reference to dispatch fn from redux store

```
check usage warning in docs(incase of many nested components) (Nested components may be prevented from best practices)(So could use hooks peacefully instead of mapStateToProps or mapDispatchToProps(ie connect))
```
