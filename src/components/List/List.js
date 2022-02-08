import React from "react";
import './List.css';

function List(props) {
    return (
        <ul>
            {props.tasks.map(task => <li className="taskList" key={task.id}>
                <img className="done" src="./images/undone.png" />
                <div className="listContent">
                    {task.text}
                    <img onClick={() => {props.onDeleteItem(task)}} className="delete" src="./images/trash-task.png" title="Delete task" />
                </div>
            </li>)}
        </ul>
    );
}

export default List;