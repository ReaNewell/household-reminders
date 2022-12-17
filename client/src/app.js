import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {AppContext} from './contexts/AppContext';
import './styles/styles.scss';

import AppRouter, { history } from './routers/AppRouter';
import { remindersReducer } from './reducers/reminders';
import { authReducer } from './reducers/auth';
import { addReminder } from './actions/reminders';
import { login, logout } from './actions/auth';
import { auth } from './firebase/firebase';

export const ContextProvider =({children}) => {
    // AUTHENTIFICATION
    const [user, userDispatch] = useReducer(authReducer);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                userDispatch(login(user.uid));
                if (history.location.pathname === '/login') {
                    history.push('/');
                } 
            } else {
                userDispatch(logout());
            }
        });
    }, []);

    // REMINDERS
    const [reminders = [], remindersDispatch] = useReducer(remindersReducer);
    const addNewReminder = (reminder) => {
        const newReminder = {
            title: reminder.title,
            description: reminder.description,
            interval: reminder.interval,
            count: reminder.count,
            lastCompleted: reminder.lastCompleted
        }
        if (newReminder.title && newReminder.interval && newReminder.count) {
            remindersDispatch(addReminder(newReminder));
        } else {
            console.log("Missing data required to add new reminder.");
        }
    }

    return (
        <AppContext.Provider 
            value={{
                user,
                reminders,
                addNewReminder
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