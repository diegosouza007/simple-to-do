import React from "react";
import DoneImg from "./DoneImg/DoneImg";
import './List.css';

function List(props) {
    return (
        <ul>
            {props.tasks.map(task => <li className={props.theme? "taskList dark" : "taskList"} key={task.id}>
                <button onClick={() => {props.onHandleDone(task)}}>
                    <DoneImg done={task.done}/>
                </button>
                <div className={task.done ? "listContent done" : "listContent"}>
                    {task.text}
                </div>
                <img onClick={() => {props.onDeleteItem(task)}} className="delete" src="./images/trash-task.png" title="Delete task" />
            </li>)}
        </ul>
    );
}

export default List;