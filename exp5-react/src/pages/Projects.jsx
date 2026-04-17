import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, clearTasks } from "../redux/slices/taskSlice";

function Projects() {

  const [task, setTask] = useState("");

  const tasks = useSelector((state) => state.tasks.list);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() === "") return;

    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="container">

      <div className="hero">

        <h1>Task Manager</h1>

        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />

        <button onClick={handleAdd} className="btn">
          Add Task
        </button>

        <button
          className="btn"
          onClick={() => dispatch(clearTasks())}
        >
          Clear All
        </button>

        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index}>
              {t}
              <button
                onClick={() => dispatch(deleteTask(index))}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default Projects;