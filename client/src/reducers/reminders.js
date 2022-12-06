const defaultState = [];

export const remindersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD":
            return state.concat(action.reminder);
        case "SET":
            return action.tips;
        default:
            return state;
    }
};