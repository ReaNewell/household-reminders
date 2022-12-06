import React, { useContext } from 'react';
import Reminder from './Reminder';

import { AppContext } from '../contexts/AppContext';

const ReminderList = () => {
    const { reminders } = useContext(AppContext);
    const listType = listType ? listType : false;

    return(
        <div>
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