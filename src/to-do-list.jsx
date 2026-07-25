import React,{useState} from "react";

function ToDoList(){
   const [tasks,setTasks]=useState([]);
   const [newTasks,setNewTask]=useState("");

   function inputChange(e){
       setNewTask(e.target.value);
   }

    function addtask() {
        if (newTasks.trim() !== "") {
            setTasks(t => [...t, newTasks]);
            setNewTask("");
        }
    }

   function removeTask(idx){
       const updatedTasks=tasks.filter((_,i)=>i!=idx);
       setTasks(updatedTasks);
   }

   function moveUp(idx){
    if(idx>0){
       const updatedTasks=[...tasks];
       [updatedTasks[idx],updatedTasks[idx-1]]=
       [updatedTasks[idx-1],updatedTasks[idx]]
       setTasks(updatedTasks);
    }
   }
   function moveDown(idx){
    if(idx<tasks.length-1){
       const updatedTasks=[...tasks];
       [updatedTasks[idx],updatedTasks[idx+1]]=
       [updatedTasks[idx+1],updatedTasks[idx]]
       setTasks(updatedTasks);
    }
   }

   return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a Task...."
                    value={newTasks}
                    onChange={inputChange}
                />
                <button className="add-button"
                        onClick={addtask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,idx)=>
                   <li key={idx}>
                    <span className="text">{task}</span>
                    <button className="delButton" onClick={()=>removeTask(idx)}>Delete</button>
                    <button className="moveUp" onClick={()=>moveUp(idx)}>👆</button>
                    <button className="moveDown" onClick={()=>moveDown(idx)}>👇</button>
                   </li>
                )}
            </ol>
        </div>
   );
}

export default ToDoList