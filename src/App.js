import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import data from "./db.json";

const LOCAL_STORAGE_KEY = "taskApp.todo";

function App() {
  const initdata = JSON.stringify(data.tasks);

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([initdata]);

  useEffect(() => {
    const localTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (localTask) setTasks(localTask);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    const newTasks = [...tasks];
    const togTask = newTasks.find((task) => task.id === id);
    togTask.reminder = !togTask.reminder;
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
