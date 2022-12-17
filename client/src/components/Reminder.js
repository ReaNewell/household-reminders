import moment from 'moment';
import React from 'react';

const Reminder = (props) => {


    const title = props.title ? props.title : "No Title";
    const interval = props.interval ? props.interval : "No interval";
    const count = props.count ? props.count : "No count";
    const lastCompleted = props.lastCompleted ? moment(props.lastCompleted) : moment();

    return (
        <div className='reminder'>
            <h4>{title}</h4>
            <p>{interval.toLowerCase().slice(0, 1).toUpperCase() + interval.slice(1)}</p>
            <p>{count}</p>
            <p>{lastCompleted.format("ll")}</p>
            <button>Edit</button>
            <button>Close</button>
        </div>
    );
};

export default Reminder;