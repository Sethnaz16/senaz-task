import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";




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

  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App