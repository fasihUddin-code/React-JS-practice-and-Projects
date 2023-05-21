import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';




function App() {

  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(0)

  const [todoData, setTodoData] = useState([])
  //console.log(todoData);

  // useEffect(() => { 
  //   alert('I am clicked') 
  // },[num])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => setTodoData(response))

  }, [])


  return (
    <>

      <ol>
        {todoData.map(item => {
        return <li> {item.title}</li>
      })}
      </ol>
      {/* <button

        onClick={(() => { setNum(num + 1) })}

      >Count {num}</button>

      <br />
      <button

        onClick={(() => { setNums(nums + 1) })}

      >Count {nums}</button> */}

    </>
  );
}

export default App;
