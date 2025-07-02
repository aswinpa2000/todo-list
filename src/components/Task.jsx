import Input from "./input";
import Card from "./Card";
import { useEffect, useState } from "react";

const Task = () => {
  const initial_tasks = [];

  const [tasks, setTasks] = useState(initial_tasks);

  const addTaskHandler = async (newTask) => {
    let newTaskObj = {
      task_id: Math.random(),
      task_name: newTask,
    };
    
    //Add task 
    const response = await fetch("https://todo-backend-nby0.onrender.com/create", {
      method : "POST",
      headers : {
      "Content-Type" : "application/json"
      },
      body : JSON.stringify(newTaskObj),
    })
    if (response.status==201){
      getTasks();
      alert("New Task Added Successfully!!");
    } else{
      alert("Failed to Add Task!!");
    } 
  };

  //Call to backend to delete task
  const deleteTaskHandler = async (taskId)=>{
    const response = await fetch("https://todo-backend-nby0.onrender.com/" + taskId , {
      method : "DELETE"
    })
    if (response.status==200){
      alert("Task deleted");
      getTasks();
    } else{
      alert("Failed to delete task");
    }
  }

//calling to backend api to get task
  const getTasks = async () =>{
    const response = await fetch("https://todo-backend-nby0.onrender.com/")
    const taskList = await response.json();
    console.log(response);
    setTasks(taskList);
  }
  //call getTask function only one time
  useEffect(()=> {
    getTasks();
  },[]);


  return (
    <div id="tasks">
      <Input onAddTask={addTaskHandler} />

      {tasks.map((task) => (
        <Card data={task} onDeleteTask={deleteTaskHandler}/>
      ))}
    </div>
  );
};

export default Task;
