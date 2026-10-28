import React, { useState } from 'react';
import styles from "./Todo.module.css";
import Item from './Item';

const Todo  = () => {
    // task list
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const [list, setList] = useState([]);

    // input text
    const [input, setInput] = useState("");

    // event listener
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const addTaskHandler = (e) => {
        e.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 21243124389),
            name: input,
            status: 'pending',
        };

        const prevTasks = list;
        setList([...prevTasks, task]);
        setInput("");
        localStorage.setItem("tasks", JSON.stringify([...prevTasks, task]));
    };

    const clearAllHandler = () => {
        setList([]);
    };

    const markDoneHandler = (id) => {
        const updatedList = list.map((element)=>{
            if (element.id === id) element.status="completed";

            return element;
        });

        setList(updatedList);
        
    }

    const markDeleteHandler = (id) => {
        const updatedList = list.filter((element)=>{
            return element.id !== id 

        });

        setList(updatedList);
        
    }

  return (
    <div className={styles.mainContainer}>
        <div className={styles.inputBox}>
            <h1>Make your To-Do List</h1>
            <div>
                <p>Add your items here ✏️</p>
                <form>
                    <input type='text' placeholder='your items' 
                    value={input} 
                    onChange={handleInputChange}/>
                    <button onClick={addTaskHandler}>submit</button>
                </form>
            </div>
        </div>

        <h3>Your Tasks</h3>
        <ul>
        {list.map((element) => (
            <Item task={element} 
            onDone={markDoneHandler} 
            onDelete={markDeleteHandler} />
        ))}
        </ul>


        {list.length !== 0 && (
        <div>
            <button className={styles.clearAll} onClick={clearAllHandler}>Clear All</button>
        </div>
        )}

    </div>
        
  )
}

export default Todo; 