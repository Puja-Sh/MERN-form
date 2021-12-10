import React from 'react';
import Progress from "./Progress";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="header">
                <h1>Full::Stack</h1>
                <Link to="/login">Login</Link>
            </div>
            <Progress/>
        </div>
    );
}

export default Header;