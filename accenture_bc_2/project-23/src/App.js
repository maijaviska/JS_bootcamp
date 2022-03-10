import { useState } from "react";
import getTasks from "./API/getTasks";

function App() {
  const[tasks, setTasks] = useState(getTasks())

  const handleChecked = (taskIndex) => {
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted
    setTasks([...tasks])
  }
  
  const tasksList = tasks.map((task, index) => {
    const textLine = task.isCompleted ? 'line-through' : 'none'
    
    


    return (
      <li key={index}>
        <input type="checkbox" checked={task.isCompleted} onChange={() => handleChecked(index)}/>
        <span style={{textDecoration: textLine}}>{task.title}</span>
      </li>
    )
  })


  return (
    <div>
      <h2>Task list</h2>
      <ul>
        {tasksList}
      </ul>
    </div>
  );
}

export default App;
