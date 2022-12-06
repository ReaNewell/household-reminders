import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import {AppContext} from './contexts/AppContext';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import { remindersReducer } from './reducers/reminders';
import { addReminder } from './actions/reminders';

export const ContextProvider =({children}) => {
    // REMINDERS
    const [reminders = [], remindersDispatch] = useReducer(remindersReducer);
    const addNewReminder = (reminder) => {
        const newReminder = {
            title: reminder.title,
            description: reminder.description,
            interval: reminder.interval,
            count: reminder.count
        }
        if (newReminder.title && newReminder.interval && newReminder.count) {
            remindersDispatch(addReminder(newReminder));
            console.log(reminders);
        } else {
            console.log("Missing data required to add new reminder.");
        }
    }

    return (
        <AppContext.Provider 
            value={{
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