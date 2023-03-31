import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //Current Data,Updated Data = Initial Data
  const [count, setCount] = useState(0)




  const IncNum = () =>{
    //console.log('clicked');
    setCount(count+1)
  }



  return (
    <div className="App">
      <header className="App-header">
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>

      </header>
    </div>
  );
}

export default App;
