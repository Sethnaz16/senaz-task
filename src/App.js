import React, { useState } from "react"
import "./App.css"
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/add/AddTask";




const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Clean house',
      day: 'Feb 6th at 3:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Study React',
      day: 'Feb 7th at 4:30pm',
      reminder: false
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      { tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}
      />
      : 'No taks!'
      }
      
    </div>
  )
}

export default App