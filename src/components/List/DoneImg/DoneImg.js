import React from "react";

function DoneImg(props) {
    if (props.done){
        return <img className="checkbox" src="./images/done.png" />
    } else {
        return <img className="checkbox" src="./images/undone.png" />
    }
}

export default DoneImg;