import React, { useEffect, useState } from 'react'
import Task from './Task';

const TaskHome = () => {

    //data store on localstorage to load an array for use
    const initialArray = localStorage.getItem("tasks")?JSON.parse((localStorage.getItem("tasks"))):[];

    const[tasks, setTask] = useState(initialArray);
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    
    //submit handler method
    const sumbitHandler = (e)=>{
        e.preventDefault();
        setTask([...tasks,{title, description}]);
        setTitle("");
        setDescription("");
    }

    //delete function
    const deleteTask = (index) => {
        const filteredArray = tasks.filter((val, i)=>{
            return i!==index;
        });
        setTask(filteredArray);
    }
   
    //useEffect
    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);

  return (
    <>
    <div className="container">
        <form onSubmit={sumbitHandler}>
        <input type="text" name="" id="" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea placeholder='Decription' value= {description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button type="submit"> Add Task </button>
        
        </form>
        {/* //map function for looping element */}
        {tasks.map((item, index)=>(
            <Task 
            key={index}  
            title={item.title} 
            description={item.description} 
            deleteTask={deleteTask} 
            index={index}/>
        ))}
        
    </div>
   
    </>
  )
}

export default TaskHome;