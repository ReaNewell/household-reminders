import React from "react";
import { history } from '../routers/AppRouter';
import { startLogout } from "../actions/auth";

const Header = () => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = false ? date : new Date();

    const handleLogout = () => {
        startLogout();
        history.push('/login');
    }

    return(
        <div>
            <h2>{month[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default Header;