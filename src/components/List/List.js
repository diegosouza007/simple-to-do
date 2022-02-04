import React from "react";
import './List.css'

function List(props) {

    return (
        <ul>
            {props.tasks.map(task => <li className="taskList" key={task.id}>{task.text}<button>x</button></li>)}
        </ul>
    );
}

export default List;