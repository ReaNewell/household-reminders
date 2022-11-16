import React from 'react';
import Reminder from './Reminder';

const ReminderList = () => {
    const listType = listType ? listType : false;

    return(
        <div>
            <Reminder />
        </div>
    );
};

export default ReminderList;