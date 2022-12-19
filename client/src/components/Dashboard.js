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
        <div>
            <Header />
            {reminderLists.due.length > 0 && <ReminderList reminders={reminderLists.due} listType={"due"}/>}
            {reminderLists.upcoming.length > 0 && <ReminderList reminders={reminderLists.upcoming} listType={"upcoming"}/>}
            {reminderLists.other.length > 0 && <ReminderList reminders={reminderLists.other} listType={"other"}/>}
            <ReminderForm />
        </div>
    )
};

export default Dashboard;