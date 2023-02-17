
import {  useState } from 'react';
import './App.css';







function App() {

const [text, setText] = useState("")
const [task,setTask] = useState([])

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("subited")

  setTask([...task,text]);
}


const deletList = (index) => {

   const finalList = task.filter((el,id)=>{
      return id !== index;
    })

    setTask(finalList);
}






  return (
    <div className="App">
      <div className='container'>
          <form className='upr' onSubmit={handleSubmit}>
             <input type="text" className='inpt' placeholder='Enter To Add' value={text} onChange={(e)=>{setText(e.target.value)}} ></input>
             <button className='btn'>Add</button>
          </form>

          <div className='showlist'>
              <div className='row'>
                  {
                    task.map((item,index)=>
                       <div className='list'>
                          <span className='urs'> {item}</span>
                          <button className='btns' onClick={()=>{deletList(index)}}>Delete</button>
                        </div>
                    )
                  }
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
