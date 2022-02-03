import React, { useState } from "react";

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
        }
    }

    return (
        <form>
            <input onChange={handleText}></input>
            <button onClick={createNewTask}>+</button>
        </form>
    );
}

export default ListForm;