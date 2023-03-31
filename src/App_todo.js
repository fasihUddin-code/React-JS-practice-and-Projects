import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
//CRUD
//Create Read Update Delete

const[List , setList] = useState([
  'Eat',
  'Coding',
  'Exercise',
  'Play Cricket'

])

const [inputValue , setinputValue] = useState("")

const addItem = ()=>{
console.log('add Item')
let copyArr = [...List]
copyArr.push(inputValue)
setList(copyArr)

}





  return (
    <>
    <div className="App">
      <header className="App-header">
        <input onChange={(event)=>setinputValue(event.target.value)}/>
        <button onClick={addItem}>
          ADD
        </button>
        {
          List.map((item,index)=>{
            return <div>{index}){item} </div>


          })
        }

        
      </header>
    </div>
    </>
  );
}

export default App;
