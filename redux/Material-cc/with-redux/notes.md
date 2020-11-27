# React redux using codevolution(YT)

## Introduction

- Redux:- Redux is a predictable state container for Javaascript apps

  1. For javscript apps:= Redux is not tied to react, it can be used with Reacct, Angular, Vue or even with vanilla Javascript
  2. State container:= It stores the state of _application_. includes data and ui logic.
  3. predictable:= All transactions are predictable and can be tracked.

- why? Components have their own state why do we need redux to manage state

  - If some data from leaf node state has to be used in other component then the state has to be lifted to thier parents at some point this results in state management in App component and it becomes hefty to bubble props through all the components which is why react is needed.

- when? To use react

  - When application has considerable number of components drilling props through all the components becomes troublesome. Even the components which dont use particular prop should also be aware of that prop

- How does react solve this issue?

  - State is contained outside the components. If a component wants to update the state it communicates with container. Container updates the state in predictable manner and sends this value to only those components that are in ineed of that value.

- Other way to solve the same proble

  - React Context - Prevents prop drilling
  - using useContext, useReducer Hooks

- Redux is a state management library so its difficult to directly interact with redux from react which is why react-redux is required. This is the official redux binding library for react.

## Summary

- React is library used to build user interfaces
- Redux is library for managing state in a predictable way in javaScript applications.
- React-redux is a library that provide4s bindings to use REact and REdux together in an application

# hooks

- By using hooks components need not to connect to store at all.
- useSelector does the samething that mapStateToProps does

- useSelector(takes a function with state as arg and returns whatever that function returns), useDispatch(returns the reference to dispatch of redux store)
