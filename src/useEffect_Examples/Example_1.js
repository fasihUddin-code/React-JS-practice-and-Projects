import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Dashboard from '../Views/Dashboard'

function App() {
  
  const[todoData, setTodoData] = useState()

  const[refresh , setRefresh] = useState(false)

  useEffect(()=>{
    fetch("https://dummyjson.com/products/1")
    .then((response)=>response.json())
    .then((response)=>setTodoData(response.products))

  },[refresh])

  // if(!todoData){
  //   return <div>no Data Found</div>
  // }


  return (
    <>
    App
    <button onClick={()=>setRefresh(!refresh)}>Refresh</button>
    {refresh && <Dashboard/>}         


    </>
  );
}

export default App;
