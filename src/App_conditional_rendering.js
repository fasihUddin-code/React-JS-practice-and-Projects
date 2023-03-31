import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //Conditional rendering
  //Ternary operators
  const[condition, setCondition] = useState(false)

  


  return (
    <div className="App">
      <header className="App-header">

        {
          condition ? <img src='https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png' width={250}/> 
          :
          <img src='https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png'  width={250}/>
        }
      
      <button onClick={()=>{
        setCondition(!condition)
      }}>
        Switch ON/OFF
      </button>
        
      </header>
    </div>
  );
}

export default App;
