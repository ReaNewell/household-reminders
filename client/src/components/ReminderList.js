import React, { useContext } from 'react';
import Reminder from './Reminder';

const ReminderList = (props) => {
    const reminders = props.reminders;
    const listType = props.listType ? props.listType : false;

    return(
        <div>
            <h4>{listType.toUpperCase()}</h4>
            {reminders.map(item => {
                return <Reminder
                    {...item}
                    key = {item.title}
                />
            })}
        </div>
    );
};

export default ReminderList;