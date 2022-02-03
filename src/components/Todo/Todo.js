import React, { useEffect, useState } from "react";
import List from "../List/List";
import ListForm from "../ListForm/ListForm";
import Task from './Task';
import './Todo.css';

function Todo() {
    
    const [tasks, setTasks] = useState([]);

    function onAddItem(text) {

        let task = new Task(text);
        setTasks([...tasks, task]);
    }
    
    return (
        <main className="main">
            <h1>My tasks</h1>
            <ListForm onAddItem={onAddItem}/>
            <List tasks={tasks} />
        </main>
    )
}

export default Todo;