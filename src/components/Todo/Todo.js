import React, { useEffect, useState } from "react";
import List from "../List/List";
import ListForm from "../ListForm/ListForm";
import Trash from '../Trash/Trash';
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

    function onDeleteItem(item) {
         let tasksFiltered = tasks.filter(task => {
            return task.id !== item.id;
        });
        setTasks(tasksFiltered);
    }

    function onDeleteAllTasks() {
        if (tasks.length > 0) {
            let option = window.confirm("Are you sure you want to delete all your tasks?");
            if(option) {
                setTasks([]);
            }
        }
    }

    return (
        <main className="main">
            <div className="content">
                <h1>My tasks</h1>
                <ListForm onAddItem={onAddItem}/>
                <List tasks={tasks} onDeleteItem={onDeleteItem} />
            </div>
            <Trash tasks={tasks} onDeleteAllTasks={onDeleteAllTasks}/>
        </main>
    );
}

export default Todo;