import React, { useEffect, useRef, useState } from "react"
import TodoItms from './TodoItems'
import todo_icon from'../assets/todo_icon.png'

const Todo = () => {


  const [item,setItem]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

  const inputref=useRef();
  const add = ()=>{

    const inputText=inputref.current.value.trim();
    if(inputText===""){
      return null;  
    }
    const newTodo={
      id:Date.now(),
      text:inputText,
      isComplete:false,
    }
   
    setItem((previous)=>[...previous,newTodo]);
    inputref.current.value="";
  }
  const set= (e) => { 
    if (e.key === 'Enter')
       { e.preventDefault(); 
        add();
       }
       };
  const deleteTOdo=(id)=>{
    setItem((previous)=>{
      return previous.filter((items)=>
        {
          return items.id !== id} )
    })

  }
  const toogle=(id)=>{
    setItem((previous)=>{
      return previous.map((iteml)=>{
        if (iteml.id === id) {
          return {...iteml, isComplete: !iteml.isComplete}          
        }
        return iteml;
      })
    })
  }
  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(item));
  },[item])


  return (
    <>
    {/* ************************Title*************************** */}
    <div className=" bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex mt-7 gap-7 items-center">
        <img src={todo_icon}alt=""  className="w-8"/>
        <h1 className="text-3xl font-semibold">To-DO-List</h1>

      </div>
      {/* ********************* input fild****************************** */}
      <div className="flex item-center my-7 bg-gray-400 rounded-full">
         <input onKeyDown={set} ref={inputref} className="bg-transparent outline-none border-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add your task" />
          <button onClick={add} className="border-none rounded-full bg-orange-400 w-32 h-14 text-lg font-medium cursor-pointer text-white ">Add+</button>
      </div>
      {/* *********************Todo list****************************** */}

     <div>
      
     </div>
     {item.map((item,index)=>{
      return <TodoItms key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteitem={deleteTOdo} toogle={toogle}/>
     })}
    

    </div>
    </>
  )
}

export default Todo