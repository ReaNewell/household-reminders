import React from 'react';

import Header from './Header';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';

const Dashboard = () => (
    <div>
        <Header />
        <ReminderList />
        <ReminderForm />
    </div>
);

export default Dashboard;