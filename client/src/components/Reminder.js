import React from 'react';

const Reminder = () => {
    const title = title ? title : "No Title";
    const interval = interval ? interval : "No interval";
    const lastCompleted = lastCompleted ? lastCompleted : "Never Completed";

    return (
        <div className='reminder'>
            <h4>{title}</h4>
            <p>{interval}</p>
            <p>{lastCompletexd}</p>
            <button>Edit</button>
            <button>Close</button>
        </div>
    );
};

export default Reminder;