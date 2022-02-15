import React, { useEffect, useState } from "react";
import List from "../List/List";
import ListForm from "../ListForm/ListForm";
import Trash from '../Trash/Trash';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import Task from './Task';
import './Todo.css';

function Todo() {
    
    const [tasks, setTasks] = useState([]);
    const [theme, setTheme] = useState(false);
    const [theme2, setTheme2] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('@todolist:items')) {
            setTasks(JSON.parse(localStorage.getItem('@todolist:items')));
        }
        setTheme(JSON.parse(localStorage.getItem('@todolist:theme')));
    },[]);

    useEffect(()=>{
        localStorage.setItem('@todolist:items', JSON.stringify(tasks));
        localStorage.setItem('@todolist:theme', JSON.stringify(theme));
    },[tasks, theme]);

    useEffect(()=> {
        if (tasks.length > 0) {
            document.title = `${tasks.length} tasks - Simple To Do`;
        } else {
            document.title = `Simple To Do`;
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
            setTasks([]);
            setModal(false);
        }
    }

    function onHandleDone(item) {
        let updatedItems = tasks.map(task => {
            if (item.id === task.id){
                task.done = !task.done;
            };
            return task;
        });
        setTasks(updatedItems);
    }

    function onHandleTheme() {
        setTheme(!theme);
    }

    function toggleModal(){
        setModal(!modal);
    }

    return (
        <main className={theme ? "main dark" : "main"}>
            <Header theme={theme} onHandleTheme={onHandleTheme}/>
            <div className="content">
                <h1>My tasks</h1>
                <ListForm theme={theme} onAddItem={onAddItem}/>
                <List theme={theme} tasks={tasks} onDeleteItem={onDeleteItem} onHandleDone={onHandleDone}/>
            </div>
            <Modal tasks={tasks} modal={modal} onDeleteAllTasks={onDeleteAllTasks} toggleModal={toggleModal}/>
            <Trash tasks={tasks} toggleModal={toggleModal}/>
        </main>
    );
}

export default Todo;