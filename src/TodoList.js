
import React, { useState } from "react";

export function ListOfToDo(props) {
    // list of to do items
    const [todoList, setToDoList] = useState([]);
    const [newItem, setNewItem] = useState("");
    
    const handleAddItem = () => {
      // add new item to list
      let ntodos = [...todoList, { id: todoList.length, title: newItem }];
      setToDoList(ntodos);
      setNewItem("");
    };
    
    const handleDelete = (id) => {
      // delete item from list
      let ntodos = todoList.filter((item) => item.id !== id);
      setToDoList(ntodos);
    };
    
    return (
      <div>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button className="btn btn-primary" onClick={handleAddItem}>
          Add new Item To List
        </button>
        {todoList.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
            ></ToDoItem>
          );
        })}
      </div>
    );
  }


function ToDoItem({ title, handleDelete }) {
  return (
    <div>
      <h1>{title}</h1>
      <button className="btn btn-danger" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
}
