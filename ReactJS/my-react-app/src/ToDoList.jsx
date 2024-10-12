/* eslint-disable no-unused-vars */
import React,{useState} from "react";

function ToDoList()
{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(e)
    {
        setNewTask(e.target.value);     
    }

    function addTask()
    {
        if(newTask.trim() !== "")
        {
            setTasks(...tasks, newTask);
            setNewTask("");
        }
    }

    function deleteTask(index)
    {
        const updatedTask = tasks.filer((_, i) => i!== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if(index>0)
        {
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] =[updatedTask[index-1],updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index<tasks.length-1)
            {
                const updatedTask = [...tasks];
                [updatedTask[index],updatedTask[index+1]] =[updatedTask[index+1],updatedTask[index]]
                setTasks(updatedTask);
            }

    }
    
    return(
        <div className="to-do-list">
            <h2>To-Do-List</h2>
            <div className="to-do">
                <input type="text" placeholder="Enter your Task" value={newTask} onChange={handleInputChange} />
                <button className ="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((t,i) => <li key={i}>
                    <span>{t}</span>
                    <button className="delete-button" onClick={() => deleteTask(i)}>Delete</button>
                    <button className="move-up-button" onClick={() => moveTaskUp(i)}>Move Up</button>
                    <button className="move-down-button" onClick={() => moveTaskDown(i)}>Move Down</button>
                </li>)}
            </ol>
        </div>
    );
}


export default ToDoList;