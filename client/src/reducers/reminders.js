const defaultState = [];

export const remindersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD":
            return state.concat(action.reminder);
        case "UPDATE":
            // Find the index of the reminder to update
            const index = state.findIndex(reminder => reminder.title === action.oldTitle);
            console.log(index);
            // Replace the old reminder with the updated one
            state[index] = action.updatedReminderData;
            // Return a new array with the updated reminder
            return [...state];
        case "CLEAR":
            const newReminderList = [];
            state.forEach(reminder => {
                if (reminder.title != action.title) {
                    newReminderList.push(reminder);
                }
            })
            return newReminderList;
        case "SET":
            return action.reminders;
        default:
            return state;
    }
};