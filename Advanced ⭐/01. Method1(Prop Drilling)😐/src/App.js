import React, {useState} from 'react' 
import './App.css';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    let newCount = count + 1;
    setCount(newCount)
  }

  const decrement = () => {
    let newCount = count - 1;
    setCount(newCount)
  }

  return (
    <div className="App">
      <Display increment={increment} decrement={decrement} value={count}/>
    </div>
  );
}

export default App;
