import React from "react";

const FirebaseContext = React.createContext(null);

// export const withFirebase = (Component) => (props) => (
//   <FirebaseContext.Consumer>
//     {(firebase) => <Component {...props} firebase={firebase} />}
//   </FirebaseContext.Consumer>
// );

export const withFirebase = function (Component) {
  //withFirebase is a function which takes a Component as parameter and returns the same component with added firebase prop
  return function (props) {
    // returns a functional component
    return (
      <FirebaseContext.Consumer>
        {(firebase) => <Component {...props} firebase={firebase} />}
      </FirebaseContext.Consumer>
    );
  };
};

export default FirebaseContext;
