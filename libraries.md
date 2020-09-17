# Libraries

## React-Router-DOM

```
npm i react-router-dom
```

A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app.

## React hooks

```
npm i react-hooks
```

A module which contains react hooks

## Universal Cookie

```
npm i universal-cookie
```

A tool to manage cookies, read, write, del cookies

## React Bootstrap

```
npm i react-bootstrap
```

A tool to which is used to use Bootstrap in the components

## React Firebase

```
npm i react-firebase
```

A module that allows to interact with Google's Firebase

## React Redux

```
npm i react-redux
```

For global state management

## Recompose

```
npm i recompose
```

To create a component with two or more higher order components

## webpack, webpack-cli, webpack-dev-server

--save-dev is used to install dependencies as developer dependencies

```
npm i webpack
npm i webpack-cli
npm i webpack-dev-server
```

webpack :- to convert modules with dependencies to static assets
webpack-cli:- Any parameters sent to the CLI will map to a corresponding parameter in the configuration file.
webpack-dev-server:- This helps to know where exactly the error is from. The stack would point somewhere at the compiled code.

## loadash

A modern JavaScript utility library delivering modularity, performance & extras

```
npm i loadash
```

without using loadash

```
const result = wrapInDiv(toLowerCase(trim(input)))
```

using loadash

```
<!-- In the same order -->
const result = compose(wrapInDiv, toLowerCase, trim);
console.log(result(input))

//In the order in which it should appy
const result = pipe(trim, toLowerCase, wrapInDiv);
console.log(result(input))
```

# Immutablejs, Immer, Mori

- Libraries to enforce immutability

# Immutablejs

```
npm i immutable
```

Draw back:- some functions just requires plane object for which .toJS() is to be used and to get and set key values .get('key') and .set('key', 'value')is to be used which spreads out in complete code base

# Immure

```
npm i immer
```

# redux-thunk

```
npm i redux-thunk
```

middle ware for redux helps to access dispatch method ao that we can make async calls
Define async action creators

# redux-logger

```
npm i redux-logger
```

This library logs alll the info related to redux in application

# axios

```
npm i axios
```

Request to an API end point
