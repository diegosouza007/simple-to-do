import React from "react";
import './Theme.css';

function Theme() {
    return (
        <span className="theme">
            <img src="./images/icons8-sun-80.png" />
            <div className="themeBar">
               <span className="ball">o</span> 
            </div>
            <img src="./images/icons8-moon-64.png" />
        </span>
    );
}

export default Theme;