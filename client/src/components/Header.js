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
        <div className="header">
            <h2 className="header__title">{month[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</h2>
            <button className="header__button" onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default Header;