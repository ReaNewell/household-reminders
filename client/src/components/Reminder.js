import React from 'react';

const Reminder = () => {
    const title = title ? title : "No Title";
    const description = description ? description : "No Description";

    return (
        <div class='reminder'>
            <h4>{title}</h4>
            <p>{description}</p>
            <button>Edit</button>
            <button>Close</button>
        </div>
    );
};

export default Reminder;