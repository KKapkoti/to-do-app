//src/App.js
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import Clock from "./components/Clock";
import CalendarBox from "./components/CalendarBox";

const API_BASE= 'http://localhost:4000/to-do-app';



function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => {
    getTodos();
  }, []);

  const handleChange = (e) => {
     setInput(e.target.value)
  }

  const getTodos = async () => {
    try {
      const response = await fetch(API_BASE);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addItem = async () => {
    if (input.trim() === "") {
      alert("Please enter a task.");
      return;
    }

  try {
    const response = await fetch(`${API_BASE}/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: input,
        completed: false,
      }),
    });

    const data = await response.json();
    console.log(data);
    await getTodos();
    setInput('');
  } catch (err) {
    console.error("Failed to add a new task:", err);
  }
};


//
const updateTodo = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_BASE}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Failed to update the task");
    }

    const updatedTodo = await response.json();
      setItems((items) =>
        items.map((item) => (item._id === id ? updatedTodo.updatedTodo : item))
      );
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <div className="container">
      <div className="glass-heading">
        <h1>Taskure - Your Daily Task Cure</h1>
        <div className="glass main-content">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="glass clock-box">
          <Clock />
        </div>
        <div className="glass calendar-box">
          <CalendarBox />
        </div>      
      </div>

      {/* Right Panel */}
      <div className="right-panel glass">
        <div className="form-box">
          <input type="text" value={input} onChange={handleChange} placeholder="Write here anything..." />
          <button onClick={addItem}>Add to list</button>
        </div>

        <div className="todolist-box">
          <h3 className="todo-heading">Todo List 🗒️</h3>
      <div className="todolist">  
      {items.map((item)=> {
        const {_id, name, completed} = item;
        return(
        <TodoItem
        key={_id}
        name={name} 
        id={_id} 
        completed={completed} 
        setItems={setItems}
        updateTodo={updateTodo}
        />   
        );
      })}
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};


export default App;

