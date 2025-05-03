import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
 
 

function App() {
  let[todolist,setTodolist]=useState([])
  
  let saveToDoList=(event)=>{
    let toname=event.target.toname.value;
    
    if(!todolist.includes(toname)){
      let finalDolist=[...todolist,toname]  //Save the Data
      setTodolist(finalDolist)  //Send the Data To the State
    }
    else{
      alert("ToDo Name is Already Exists..")
    }

   
    event.preventDefault();
  }

  let list=todolist.map((value,index)=>{  //insert the value into the variable
    return(
      <ToDoListItems value={value} key={index} indexNumber={index}
      todolist={todolist}
      setTodolist={setTodolist}

      />    
    )
  
  })


  return (
    <div className="App">
      
        <h1>ToDo List</h1>
        <form onSubmit={saveToDoList}>
          <input type='text' name='toname'></input>
          <button>Save</button>
        </form>

        <div className='outerDiv'>
          <ul>
             {list}   
          </ul>

        </div>



        </div>
      
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist}){ //setTodolist is used to update the list
  let [status,setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData= todolist.filter((value,i)=>i!=indexNumber) //Store remaining data after check the delete item index no.
    setTodolist(finalData) //send the remaining data 
  }

  let checkStatus=()=>{
    setStatus(!status)
  }

  return(
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>  //Print the variable
  )
}