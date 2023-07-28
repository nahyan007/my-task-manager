import React ,{useState} from "react";



const TaskForm = () => {
    const [taskTitle, setTaskTitle] = useState("");

    const [mainTaskList, setMainTaskList] = useState([]);
    const [taskList, setTaskList] = useState([]);

    const handleTaskSubmit = event => {
        event.preventDefault();
        setMainTaskList ([...mainTaskList, taskTitle]);
        setTaskList ([...taskList, taskTitle]);
        setTaskTitle("")

    }




  return (

    <div className="task__wrapper">
            <form onSubmit={handleTaskSubmit}>
      <input
      className="task__input " 
      type="text" 
      placeholder="Write down your task"
      value={taskTitle}
      onChange={e => setTaskTitle(e.target.value)}
       />

      <button 
      type="submit"
      className="task__btn "
      >Add task</button>
    </form>

    <div>
    <h1>Tasks For Today </h1>
        {
            taskList.map((task,index) =>(
                <div className="task" key={index}>
                    <p>{task}</p>
                </div>
            ))
        }
    </div>
    </div>
    
  );
};

export default TaskForm;
