import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Task from "./Components/Task";
import {ITask} from './Components/Interfaces';

function App() {
const [task, setTask] = useState<ITask> ({
  id:0,
  text: '',
  deadline: 0  
});

const [tasksArr, setTasksArr] = useState<ITask[]>([]);

const id = tasksArr.length;

const taskInputHandler  = (event : ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>): void =>{
const {name, value} = event.target;

  if(name === 'task') {
  return setTask( 
    {
       ...task,
      text: value,
      id: id,
  }
  );

  } else if (name === 'deadline') {
  return setTask ( 
    { 
      ...task,
    deadline: Number(value)
  }
  )   
}
}

const addTasksHandler = () => {
  setTasksArr(
      [
      ...tasksArr,
       task
      ]
  );

  setTask(
    {
    id:0,
    text: '',
    deadline: 0 
   }
    );
}

const deleteTaskHandler = (id:number) => {
 setTasksArr( 
  tasksArr.filter((item, index) => { 
    return id !== index 
    })
  )
}

  return (
    <div className="App">
    <section className ="adding-task-bar">
      <div className ="adding-task-container">
      <textarea 
        onChange = {taskInputHandler} 
        rows={1} 
        placeholder='Type your task' 
        name="task" value={task.text}>          
      </textarea>
      <input onChange = {taskInputHandler} 
      type= 'number' value={task.deadline} 
      name='deadline'></input>
      <button  className="add-task-button" onClick ={addTasksHandler}>
        Add
      </button>
      </div>
    </section>

    <section className='display-tasks-area'>
      <div className="display-tasks-container">
        {tasksArr.map(item => {
          return <Task 
            key = { item.id} 
            name= {item.text} 
            deadline= {item.deadline} 
            delete= {deleteTaskHandler} 
            id={item.id} 
            />
        })}        
      </div>

    </section>
    </div>
  );
}

export default App;
