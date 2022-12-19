import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {AppContext} from './contexts/AppContext';
import './styles/styles.scss';

import AppRouter, { history } from './routers/AppRouter';
import { remindersReducer } from './reducers/reminders';
import { authReducer } from './reducers/auth';
import { startAddReminder, startSetReminders, startClearReminder, clearReminder, startUpdateReminder } from './actions/reminders';
import { login, logout } from './actions/auth';
import { auth } from './firebase/firebase';

export const ContextProvider =({children}) => {
    // AUTHENTIFICATION
    const [user, userDispatch] = useReducer(authReducer);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                userDispatch(login(user.uid));
                remindersDispatch(startSetReminders(user.uid, remindersDispatch));
                if (history.location.pathname === '/login') {
                    history.push('/');
                } 
            } else {
                userDispatch(logout());
            }
        });
    }, []);

    // REMINDERS
    const [reminders, remindersDispatch] = useReducer(remindersReducer);
    const addNewReminder = (reminder, dueDate) => {
        const newReminder = {
            title: reminder.title,
            description: reminder.description,
            interval: reminder.interval,
            count: reminder.count,
            lastCompleted: reminder.lastCompleted,
            dueDate: dueDate
        }
        if (newReminder.title && newReminder.interval && newReminder.count) {
            remindersDispatch(startAddReminder(user.uid, newReminder, remindersDispatch));
        } else {
            console.log("Missing data required to add new reminder.");
        }
    }
    const updateReminder = (oldTitle, updatedReminder = {}, dueDate) => {
        const {
            title = oldTitle,
            description = "",
            interval = "",
            count = 1,
            lastCompleted = ""
        } = updatedReminder;
        const reminder = { title, description, interval, count, lastCompleted, dueDate };

        remindersDispatch(startUpdateReminder(user.uid, oldTitle, reminder, remindersDispatch));
    }
    const clearReminder = (title) => {
        startClearReminder(user.uid, title, remindersDispatch);
    }

    return (
        <AppContext.Provider 
            value={{
                user,
                reminders,
                addNewReminder,
                updateReminder,
                clearReminder
            }}
        >
            <AppRouter />
        </AppContext.Provider>
    )
}

const App = () => {
    
    return (
        <ContextProvider>
            <AppRouter />
        </ContextProvider>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));