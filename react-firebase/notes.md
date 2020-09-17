# React Firebase

<a href="https://robinwieruch.de/complete-firebase-authentication-react-tutorial">source</a>

## File Structure

- All the components are to be moved to folder inside src named as components
- all constants like routes, roles are to be inside folder named as constants inside folder named as constants

## Dependencies

- react-router-dom

```
    npm install react-router-dom
```

- firebase

  - copy config from dashboard from the dashboard of the project and paste it in firebase.js file inside firebase folder

  ```
      npm install firebase
  ```

  - create class in firebase.js and instantialte app with the config
  - import Firebase and {FirebaseContext} from firebase module(local)
  - Change the tag in index.js in src/ to <FirebaseContext.Producer value = {new Firebase()}>
  - to enable authentication from firebase import package from firebase responsible for all the authentication

- recompose

  ```
    npm install recompose
  ```

  - to create higher order components
