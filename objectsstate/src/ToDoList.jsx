import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewtTask] = useState("");

  const handleInputChange = (event) => {
    setNewtTask(event.target.value);
  };

  const addTask = () => {
    if (newTask !== "") {
      setTasks((t) => [...t, newTask]);
      setNewtTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));
  };

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="listContainer">
      <h1>To Do List</h1>
      <input
        type="text"
        id="taskInput"
        onChange={handleInputChange}
        placeholder="Enter a task"
        value={newTask}
      />

      <button className="add" onClick={addTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete" onClick={() => deleteTask(index)}>
                delete
              </button>
              <button className="up" onClick={() => moveTaskUp(index)}>
                Move Up
              </button>
              <button className="down" onClick={() => moveTaskDown(index)}>
                Move Down
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
