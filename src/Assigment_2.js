import logo from './logo.svg';
import './App.css';
// import './App_todo';
import { useState } from 'react';
import ToDoLists from './ToDoLists';

function App() {
  const [inputList, setInputList] = useState("")
  const [Items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value);

  }

  const listOfitems = () => {

    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList('')
  }

  const deleteItems = (id) => {
    //console.log('deleted items')

    setItems((oldItems) => {
      console.log(`oldItems :${oldItems}`);
      return oldItems.filter((arrElem, index) => {
        //console.log(`array element: ${arrElem}.. index:${index}.. id:${id}`);
        return index !== id

      })

    })
  }

  return (
    <>

      <div className='centre_div container'>
        {/* <div className='mx-auto  border border-dark' style={{ width: 200}}>

            <br />
            <h1>ToDo List</h1>
            <br />
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Add a item" aria-label="Add a item" aria-describedby="basic-addon2"
              value={inputList}
              onChange={itemEvent}
              />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={listOfitems}>
                    +</button>
                </div>
            </div>
            {/* <input type='text' placeholder='Add a item'
              value={inputList}
              onChange={itemEvent} />
            <button onClick={listOfitems}>+</button> */}

        {/* <ol className ='list-group'> */}
        {/* <li>{inputList}</li> */}
        {
          // Items.map((itemVal, index) => {
          //   return (

          //     <ToDoLists
          //       key={index}
          //       id={index}
          //       text={itemVal}
          //       onSelect={deleteItems}

          //     />
          //   )
          //})

        }

        {/* </ol> */}
        {/* </div> */}
        <main>

          <div className="row p-5">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-md-2">
              <div className="card p-2 border-0 shadow-lg">
                <div className="card-body">
                  <h2 className="text-center mb-4">Todo App</h2>
                  <div className="row">
                    <div className="col-12 col-md-10 col-sm-12 mt-3">
                      <form>

                        <div className='form-group'>
                          <input type="text" placeholder="Add you new todo" className="form-control"
                            required
                            value={inputList}
                            onChange={itemEvent}
                          />
                         
                        </div>
                      </form>

                    </div>
                    <div className="col-12 col-md-2 col-sm-12 mt-3 ">
                      <button className="btn btn-dark w-100"
                        onClick={listOfitems}

                      >+</button>
                    </div>


                  </div>
                  <div className='row'>
                    <div className='col-12 col-md-10'>
                      <ol className='list-group'>
                        {/* <li>{inputList}</li> */}
                        {
                          Items.map((itemVal, index) => {
                            return (

                              <ToDoLists
                                key={index}
                                id={index}
                                text={itemVal}
                                onSelect={deleteItems}

                              />
                            )
                          })

                        }

                      </ol>


                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


        </main>
      </div>
    </>

  );
}

export default App;
