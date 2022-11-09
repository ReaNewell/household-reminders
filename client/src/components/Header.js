import React from "react";

const Header = () => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = false ? date : new Date();

    return(
        <h2>{month[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</h2>
    )
};

export default Header;