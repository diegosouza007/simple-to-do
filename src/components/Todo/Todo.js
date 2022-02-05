import React, { useEffect, useState } from "react";
import List from "../List/List";
import ListForm from "../ListForm/ListForm";
import Task from './Task';
import './Todo.css';

function Todo() {
    
    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        if (tasks.length > 0) {
            document.title = `${tasks.length} tasks - Simple To Do`;
        }
    }, [tasks]);

    function onAddItem(text) {

        let task = new Task(text);
        setTasks([...tasks, task]);
    }

    return (
        <main className="main">
            <div className="content">
                <h1>My tasks</h1>
                <ListForm onAddItem={onAddItem}/>
                <List tasks={tasks} />
            </div>
            <div className="trash">
                <img  src="./images/trash-bin.png"/>
                <span className={tasks.length === 0 ? "hide" : ""}>
                    {tasks.length > 0 && tasks.length}
                </span>
            </div>
        </main>
    )
}

export default Todo;