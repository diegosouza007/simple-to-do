import React, { useState } from "react";
import './Modal.css'

function Modal(props) {
    return (
        <div className={props.modal ? "modal active" : "modal"}>
            <div className="content">           
                <p>You have <span>{props.tasks.length}</span> tasks created.</p>
                <p>Are you sure you want to remove all your tasks?</p>
                <span className="options">
                    <button onClick={props.toggleModal}>Cancel</button>
                    <button onClick={props.onDeleteAllTasks}>OK</button>
                </span>
            </div>
        </div>
    )
}

export default Modal;