import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MultipleChecks from './MultipleChecks';

function App() {
  //Assignment_3 
  // Tasks
  // 1. Implement all CRUD operations
  // 2. Cross-off functionality
  // 3. Remove All items functionality

  // Bonus 
  // 1. Add delete selected items functionality

  const [List, setList] = useState([
    {
      task: 'Do Home work',
      isDone: false,
      isSelected: false
    },
    {
      task: 'Do Eat Food',
      isDone: false,
      isSelected: true

    }

  ])

  const [inputValue, setInputValue] = useState('')

  const [editModeBtn, setEditModeBtn] = useState(true)

  const [editIndex, setEditIndex] = useState(false)

 // const [checkedItem, setCheckedItem] = useState([])

  const addItem = () => {
    let copyObj = [...List]
    // console.log(copyObj, inputValue)
    if (inputValue.length > 0) {


      copyObj.push({
        task: inputValue,
        isDone: false,
        isSelected: false
      })
      //console.log(copyObj)
      setList(copyObj)
    }
    else {
      alert('invalid input')
    }
    setInputValue('')

  }

  const editItem = (item, index) => {

    setEditIndex(index)
    //console.log(item); 
    setInputValue(item)
    setEditModeBtn(false)



  }

  const deleteItem = (item, index) => {
    let copyObj = [...List]
    copyObj.splice(index, 1)
    //console.log(copyObj);
    setList(copyObj)

  }

  const updateItem = () => {
    let copyObj = [...List]
    //console.log(copyArr);
    copyObj[editIndex] = {
      task: inputValue,
      isDone: false

    }
    //console.log(copyObj);
    setList(copyObj)

    setInputValue('')
    setEditModeBtn(true)

  }
  console.log(List)
  const handlerCheckItems = (event, item, index) => {
    //console.log(`event: ${event} item: ${item} index: ${index}`);
    let copyObj = [...List]
    let updatedObj = {
      task: item.task,
      isDone: item.isDone,
      isSelected: !item.isSelected
    }
    copyObj.splice(index, 1, updatedObj)
    setList(copyObj)
    console.log(List)

  }

  const deleteSelectedItems = () => {

    let copyObj = [...List]
    let updatedObj = copyObj.filter((item)=>!item.isSelected)
    setList(updatedObj)
  }

  const deleteAllItems = () =>{
    setList([])
    //console.log(List);


  }







  return (
    <>
      <div className="App">
        <header className="App-header">
          <input
            onChange={(event) => { setInputValue(event.target.value) }}
            value={inputValue}
          />
          {
            editModeBtn ? (
              <button onClick={addItem}>ADD</button>)
              : (
                <button onClick={updateItem}>UPDATE</button>
              )
          }


          <div>
            <ul>
              {List.map((item, index) => {
                return (
                  <li key={index}>
                    <input
                      type='checkbox'
                      onClick={(event) => { handlerCheckItems(event, item, index) }}
                      checked={item.isSelected}
                    />
                    <span
                      style={{ textDecoration: item.isDone ? 'line-through' : 'none' }} onClick={() => {
                        //console.log(e);
                        let copyObj = [...List]
                        copyObj[index].isDone = !copyObj[index].isDone
                        setList(copyObj)
                      }}

                    >{item.task}</span>


                    <button onClick={() => editItem(item.task, index)}>Edit</button>
                    <button onClick={() => deleteItem(item.task, index)}>delete</button>
                  </li>
                )
              })}
              {/* {List.map((item, index) => {
                return (
                  <>
                    {
                      item.isDone ? (

                        <li>
                          <input
                            type='checkbox'
                            onClick={(event) => { handlerCheckItems(event, item, index) }}

                          />
                          <span
                            style={{ textDecoration: 'line-through' }} onClick={() => {
                              //console.log(e);
                              let copyObj = [...List]
                              copyObj[index].isDone = false
                              setList(copyObj)
                            }}

                          >{item.task}</span>

                        </li>
                      ) : (
                        <li>
                          <input type='checkbox'
                            onClick={(event) => { handlerCheckItems(event, item, index) }}

                          />
                          <span
                            onClick={() => {
                              //console.log(e);
                              let copyObj = [...List]
                              copyObj[index].isDone = true
                              setList(copyObj)
                            }}

                          >{item.task}</span>

                        </li>

                      )
                    }
                    <button onClick={() => editItem(item.task, index)}>Edit</button>
                    <button onClick={() => deleteItem(item.task, index)}>delete</button>
                  </>
                )
              })} */}
            </ul>
          </div>
          <div>
            <button onClick={deleteSelectedItems}>Delete Selected</button>
            <button onClick={deleteAllItems}>Delete All</button>
          </div>




        </header>

      </div>

    </>
  );
}

export default App;
