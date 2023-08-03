import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState} from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Donos Doctor',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Yarn Dentist',
      day: 'Feb 7th at 7:00pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Bobos Bakery',
      day: 'Feb 10th at 10:30pm',
      reminder: false,
    },
  ])


  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
        <Header title='Task Tracker' onAdd={() => 
          setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show '}
    </div>
  );
}

export default App;
