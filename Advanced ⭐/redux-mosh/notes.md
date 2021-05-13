# dependencies

- react-redux
- redux

```
    npm install redux
    npm install react-redux
```

# developer dependencies

- webpack
- webpack-cli
- webpack-dev-server

# defns

- Higher order functions:- Higher order functions are those functions which either take function as parameter or return function or both
- Function composition:- If return value of one fn is the argument of the other fn that can be done like this fn2(fn1('saaketh')) this is called function composition
- Currying:- a process of converting n arguments function to one argument functions is called currying

```
    ex:-
        function add(a){
            return function(b){
                retirn a + b;
            }
        }

        const add2 = a => b => a + b;

        add(1)(2);
```

- Pure functions:- The functions which returns same value for same parameters. Pure functions should not use random values, current date/time, no global state(dom, file,db, etc), no mutation of parameters.
  uses:-
  _ Self-documenting
  _ Easily testable
  _ concurrency
  _ cacheable

- Immutability:- once created cannot be changed. benifits:- predictability, faster change detection, concurrency. Cons:- performance, memory overhead
  _structural sharing_

## JS

- reducers are to be pure.
- JAvascript is not pure functional as the objects are not immutable.
- JAvascript is a multi paradigm lang.
- When working with nested object you've to do deep copy.
- React is built based on functional programming principles
- we do not mutate variables
- store is an immutable object

# Immutability while working with objects

## updating objects while practicing immutability

```
const person = {name: "Saaketh"}
const updated = Object.assign({}, person, {name: "Vijay", age: 13})

//another spread operator syntax
const updated = {...person, name: 'vijay'}
```

# Immutability while working with Arrays

```
const numbers = [1,2,3];

//Adding
const added = [...numbers, 4]; //adding at end
const added = [4, ...numbers]; //adding at beginning

const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index),
                4, ...numbers.slice(index)] //adding at specific position

//Removing
const removed = numbers.filter(n => n !==2 );

// Updating

const updated = numbers.map(n => n == 2 ? 20 : n)
```

## Updating objects using immutablejs

```
import {Map} form 'immutable
const obj = Map({   //create
    "name": "Saaketh"
})

//set

obj.set('age', 20);

//get
obj.get('age');
```

## Updating objects using immure

```
import {produce} from 'immure'

const obj = {
    name: "saakeht",
    age: "15"
}

//changing obj
const updated = produc(obj, draftObj => {
    draftObj.age = 20;
})

```

# Reducer

- Reducer is a function that takes the store and returns the updated store

```
function reducer(store, action) {
    const updated = {...store};

}
```

# Action

- Actions are the javascript objects that describes what just happened
- Based on action reducers know what property in store to update

Therefore Redux has three building blocks.

1. Action
2. Store
3. Reducer

Actions are dispatcched, store has an dispatch method which takes actioin then forwards it to reducer. Reducer computes new state and rturns it. Store will set state internally and notifies ui components about the state.
