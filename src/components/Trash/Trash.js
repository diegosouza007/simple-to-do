import React from "react";
import './Trash.css';

function Trash(props) {
    return (
        <div onClick={props.onDeleteAllTasks} className="trash">
            <img  src="./images/trash-bin.png"/>
            <span className={props.tasks.length === 0 ? "hide" : ""}>
            {props.tasks.length > 0 && props.tasks.length}
            </span>
        </div>
    );
}

export default Trash;