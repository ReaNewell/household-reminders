import React from 'react';
import Reminder from './Reminder';

const ReminderList = (props) => {
    const reminders = props.reminders;
    const listType = props.listType ? props.listType : false;

    return(
        <div className='reminder-list__container'>
            <h4 className='reminder-list__title'>{listType}</h4>
            <div className='reminder-list'>
            {reminders.map(item => {
                return <Reminder
                    {...item}
                    key = {item.title}
                />
            })}
            </div>
        </div>
    );
};

export default ReminderList;