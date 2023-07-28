import React, { useState } from "react";
import {RiPlayListAddLine} from 'react-icons/ri';

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");


  const [taskList, setTaskList] = useState([]);

  const [emptyInput, setEmptyInput] = useState(false)



  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (taskTitle.length == 0) {
      setEmptyInput(true)
    }
    if (taskTitle) {
      setTaskList([...taskList, taskTitle]);
      setTaskTitle("");
      
    }

  };

  return (
    <div >
      <form onSubmit={handleTaskSubmit}>
        <input
          className="task__input "
          type="text"
          placeholder="Write down your task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit" className="task__btn ">
        <RiPlayListAddLine />
        </button>
        {
          emptyInput && <p>Sorry <span>!</span> can not be empty</p>
        }
      </form>

      <div className="task__item">
        <h1>Tasks For Today </h1>
        {taskList.map((task, index) => (
          <div className="task" key={index}>
            <p>{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskForm;
