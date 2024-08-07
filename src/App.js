import { useState } from 'react';
import './App.css';
import Navbar from './pages/navbar/navbar';
import Table from './pages/table/table';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Complete Homepage Layout",
      completed: true
    },
    {
      id: 2,
      task: "Fix Responsive Issues",
      completed: false
    },
    {
      id: 3,
      task: "Add Animation",
      completed: true
    },
    {
      id: 4,
      task: "Optimize Images",
      completed: false
    },
    {
      id: 5,
      task: "Update Navigation Menu",
      completed: true
    },
    {
      id: 6,
      task: "Implement Dark Mode",
      completed: false
    },
    {
      id: 7,
      task: "Test Browser Compatibility",
      completed: false
    },
    {
      id: 8,
      task: "Refactor Code",
      completed: true
    },
    {
      id: 9,
      task: "Add Accessibility Features",
      completed: false
    },
    {
      id: 10,
      task: "Deploy to Production",
      completed: true
    }
  ]);


  const [filteredTodos, setFilteredTodos] = useState(null);

  return (
    <div>
      <Navbar todos={todos} setTodos={setTodos} setFilteredTodos={setFilteredTodos} />
      <Table todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
