//src/components/TodoItems.js

import React, { useState } from "react";

function TodoItem({ name, id, completed, setItems, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/to-do-app/delete/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete a task");
      }

      setItems((items) => items.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTodo(id, { name: newName });
    setIsEditing(false);
  };

  return (
    <div className={`todo${completed ? " check-complete" : ""}`} key={id}>
      <div className="checkbox"></div>
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <div className="text">{name}</div>
      )}
      <div className="actions">
        {isEditing ? (
          <button className="button edit" onClick={handleUpdate}>Update</button>
        ) : (
          <>
            <button className="button edit" onClick={handleEdit}>Edit</button>
            <button className="button delete" onClick={() => deleteTodo(id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;