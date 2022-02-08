import React, { useState } from "react";
import './ListForm.css';

function ListForm(props) {

    const [text, setText] = useState('');

    function handleText(event) {
        let text = event.target.value;
        setText(text);
    }
    
    function createNewTask(event){
        event.preventDefault();
        if(text.trim()) {
            props.onAddItem(text);
            setText('');
        }
    }

    return (
        <form className="tasksForm">
            <input onChange={handleText} value={text}></input>
            <button className={props.theme ? "dark" : ""} onClick={createNewTask} title="Add task">+</button>
        </form>
    );
}

export default ListForm;