import React from "react";
import Theme from '../Theme/Theme'
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <Theme onHandleTheme={props.onHandleTheme} theme={props.theme}/>
            <h3>Tuesday 08, 2022</h3>
        </div>
    )
}

export default Header;