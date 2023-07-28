import React from 'react'
import './App.css'
import TaskForm from './Components/TaskForm'
import SearchForm from './Components/SearchForm'

const App = () => {
  return (
    <div className='task__container'>
    <div className="task__wrapper">
    
    <SearchForm />
    <TaskForm />

    </div>
    </div>
  )
}

export default App