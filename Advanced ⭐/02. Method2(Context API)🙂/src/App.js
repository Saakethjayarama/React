import Context from "./Context";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Context.Provider value={"LoggedIn"}>
        <User />
      </Context.Provider>
    </div>
  );
}

export default App;
