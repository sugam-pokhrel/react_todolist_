import Todo from './Todo';
import { useState,useRef } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {


  const [text,setText]=useState([{id:1,name:"todo1",iscompleted:false}]);
  const todoref=useRef();
  function handletodo(e){
    const name=todoref.current.value
    if(name==='') return

    setText(prev=>{

      return[...prev,{id:uuidv4(),name:'todo2',iscompleted:false}]
    })

    console.log(name)
    todoref.current.value=null;


  }

  return (
<>
<Todo text={text}/>
<br />
<input ref={todoref} type="text" />


<br />

<button onClick={handletodo}>AddTodo</button>
<br />
<button>ClearComplete</button>

</>
  );
}

export default App;
