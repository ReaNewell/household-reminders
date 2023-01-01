import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

import Header from './Header';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';
import {filterReminderLists} from '../selectors/filterReminderLists';

const Dashboard = () => {
    const {reminders} = useContext(AppContext);
    const reminderLists = {
        due: filterReminderLists(reminders).due,
        upcoming: filterReminderLists(reminders).upcoming,
        other: filterReminderLists(reminders).other
    };

    return (
        <div className='dashboard__container'>
            <div className='dashboard'>
                <Header />
                {reminderLists.due.length > 0 && <ReminderList reminders={reminderLists.due} listType={"due"}/>}
                {reminderLists.upcoming.length > 0 && <ReminderList reminders={reminderLists.upcoming} listType={"upcoming"}/>}
                {reminderLists.other.length > 0 && <ReminderList reminders={reminderLists.other} listType={"other"}/>}
                <ReminderForm />
            </div>
        </div>
    )
};

export default Dashboard;