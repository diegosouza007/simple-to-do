import React from "react";
import './List.css';

function List(props) {
    return (
        <ul>
            {props.tasks.map(task => <li className="taskList" key={task.id}>
                {task.text}
                <div className="listBtn">
                    <img className="done" src="./images/undone.png" />
                    <img onClick={() => {props.onDeleteItem(task)}} className="delete" src="./images/trash-task.png" title="Remove task" />
                </div>
            </li>)}
        </ul>
    );
}

export default List;