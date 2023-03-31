import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Hello world"
  const obj = { message: "Welcome to expertizo" }
  const data = ["We", "are", "united"]
  const list = [{ name: "Hello world 1" }, { name: "Hello world 2" }, { name: "Hello world 3" }]
  const complex = [
    {
      company: 'XYZ',
      jobs: ['Javascript','React']

    },
    {
      company: 'ABC',
      jobs: ['Angular','Ionic']
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* Task:1 */}
        {name}
        <br />
        {/* Task:2 */}
        {obj.message}
        <br />

        {/* Task:3 */}
        {
          data.map((value) => {
            return <h1>{value}</h1>

          })
        }

        {/* Task:4 */}
        {
          list.map((key) => {
            return 
            <li>{[key.name]}</li>
            
          })
        }
        
        {/* Task:5 */}
        <table style={{border:'2px solid white'}}>
          <tr>
            <th>Company</th>
            <th>jobs</th>  
          </tr>

        {
          complex.map((key,index)=>{
            return <tr>

                      <td>{key.company}</td>
                        <td>{key.jobs.map((j,index)=>{
                          return <>{index}){j}</>
                        })}</td>

                  </tr>
            
          })
        }
        </table>








      </header>
    </div>
  );
}

export default App;
