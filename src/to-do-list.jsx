import React,{useState} from "react";

function ToDoList(){
   const [tasks,setTasks]=useState([]);
   const [newTasks,setNewTask]=useState("");

   function inputChange(){

   }

   function addtask(){

   }

   function removeTask(idx){

   }

   function moveUp(){

   }

   return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a Task...."
                />
            </div>
        </div>
   );
}

export default ToDoList