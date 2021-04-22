# REACT

# Pre-requisites

- Installation of code editors with extensions
- Minimum knowledge on how to run/install command-line tools
- Syntax of javascript

## From Docs

- React makes it painless to create interactive UIs. Design simple views for each state in your application.
- React will efficiently update and render just the right components when your data changes.
- Declarative views
- Component Based
- Encapsulated Components that manage their own state

## npx

- npx creates the boiler plate code for creating react-app with all the dependencies to create react app

```
    npm install npx
```

## Creating react app

- Now the npx is installed react app can be created using

```
    npx create-react-app project_name
```

- This wld create all the boiler plate code with its dependencies

## cleaning up the project

- Delete  
   i logo.svg  
   ii setupTests.js  
   iii App.test.js

## File Structure

i. Node Modules

- This folder contains all the modules that is required for this project to run
- whenever a dependency or package is installed the files/folder related to that package is added to node_modules

ii. public

- This folder consists of html file which our apps gets mounted to

iii. src

- This is where all the source related to the app resides in  
  i. App.js -> This is the starting point of the app
  ii. App.css -> This is where the styles of the starting point of the app stays
  iii. index.js -> This is what gets executed first. This contains instructions to mount App.js file at the element with id 'root in public/index.html
  iv. serviceWorker.js -> This contains the instructions to interact with development server. Including sync, cache maintanance, periodic sync..etc

iv. .gitignore

- Contains names of files that are to be excluded from pushing to github ex:- node_modules, config files, cache files..etc

v. package.json

- This file contains the project dependencies, dev dependencies, scripts along with their versions

vi. package-lock.json

- package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json
- Provide a facility for users to “time-travel” to previous states of node_modules without having to commit the directory itself.

vii. README.md

- contains instructions on how to rum this application

## What is react?

- React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

  i. Declarative and imperative:-
  Declarative lets you to use pre-defined instructions without need of writing them once more whereas imperative means writing the same piece of code wherever required

  ii. By Declarative architecture react makes it easy to use the pre-existing code(components) without creating them again which makes it efficient

  iii.flexible :-
  The components can be re-used in other projects too ie. the components are not project dependent. which makes it flexible

## Components

- There are many types of components in react among them two are often used  
   i. Functional Components  
   ii. Class Components

  ### Functional Components

  - In versions before 16.8 functional components are used in the components which are static i.e, the components reamins same irrespective of the data change(state change). However, in the later versions are hooks makes it possible to handle the state change.

  ### Class Components

  - Class components are used to handle the real time state change of the components however the versions after 16.8 (i.e, after hooks release) class components got no use. But React yet supports Class Components.

* It is developer's wish to use either of them :)

## Props

- The data passed into components are called properties which inshort are called as props
- The props are used to inflate the data into the components

## Hooks

- Hooks are used in functional components to reflect the state change in the components.
- There are three basic hooks commonly used

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

  - Contexts are used to pass some props to many components

  ### Custom Hookes

  - Custom hooks are to be prefixed with use
  - Custom hooks are the combination of the react hooks

## EventListeners

- event listeners are those functions which are executed on some event raised. These listeners take a function as parameter

  i. Onclick:- The function passed is executed when the user clicks on the component

  ii. OnFocus:- Executed when the component is on focus

  iii. onBlur:- When lost focus

  iv. onMouseEnter:- When mouse enters the component

  v. onMouseLeave:- when mouse exits the component

```
routers
http requests
axios
fetch api
bind :- separate for all types of binding
arrow fns
this
*refs
formic demo
context-redux
conditional rendering
list all the website which are using react
cors:- problems
```
