import logo from './logo.svg';
import './App.css';
import FacebookPost from './FacebookPost';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  //console.log(data);


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((response) => setData(response.products))

  }, [])



  return (
    <>
              <div>

              <FacebookPost data={data}/>
              </div>


    </>
  );
}

export default App;
