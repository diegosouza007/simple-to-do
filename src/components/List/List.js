import React from "react";

function List(props) {

    return (
        <ul>
            {props.tasks.map(task => <li key={task.id}>{task.text}</li>)}
        </ul>
    );
}

export default List;