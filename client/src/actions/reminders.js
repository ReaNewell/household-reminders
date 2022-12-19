import database from '../firebase/firebase';

// ADD ACTIONS
export const addReminder = (reminder) => ({
    type: 'ADD',
    reminder
});
export const startAddReminder = (uid, reminderData = {}, dispatch) => {
  const {
    title = "",
    description = "",
    interval = "",
    count = 1,
    lastCompleted = "",
    dueDate = ""
  } = reminderData;
  const reminder = { title, description, interval, count, lastCompleted, dueDate };

  // First, retrieve all the reminders for the given user from the database
  return database
    .ref(`users/${uid}/reminders`)
    .once("value")
    .then(snapshot => {
      // Check if any of the retrieved reminders has a matching title
      const reminders = snapshot.val();
      if (reminders) {
        const matchingReminder = Object.values(reminders).find(
          r => r.title === title
        );
        if (matchingReminder) {
          // If a matching title is found, prevent the reminder from being added to the database
          console.log(`A reminder with the title "${title}" already exists.`);
          return;
        }
      }

      // If no matching title is found, add the reminder to the database
      return database
        .ref(`users/${uid}/reminders`)
        .push(reminder)
        .then(() => {
          console.log(`${reminder.title} added to Database.`);
          dispatch(addReminder({ ...reminder }));
        });
    });
};

// UPDATE REMINDER
export const updateReminder = (oldTitle, updatedReminderData) => ({
  type: "UPDATE",
  oldTitle,
  updatedReminderData
});
export const startUpdateReminder = (uid, reminderTitle, updatedReminderData, dispatch) => {
  // First, retrieve all the reminders for the given user from the database
  return database
    .ref(`users/${uid}/reminders`)
    .once("value")
    .then(snapshot => {
      // Check if any of the retrieved reminders has a matching title
      const reminders = snapshot.val();
      if (reminders) {
        const matchingReminder = Object.values(reminders).find(
          r => r.title === reminderTitle
        );
        if (matchingReminder) {
          // Get the key of the matching reminder
          const key = Object.keys(reminders).find(
            k => reminders[k] === matchingReminder
          );

          // Update the reminder in the database
          return database
            .ref(`users/${uid}/reminders/${key}`)
            .update(updatedReminderData)
            .then(() => {
              console.log(`Reminder with title "${reminderTitle}" updated in the database.`);
              dispatch(updateReminder(reminderTitle, updatedReminderData));
            });
        } else {
          console.log(`No reminder with the title "${reminderTitle}" was found.`);
          return;
        }
      } else {
        console.log("No reminders were found in the database.");
        return;
      }
    });
};


// SET REMINDERS
export const setReminders = (reminders) => ({
    type: "SET",
    reminders
});
export const startSetReminders = (uid, dispatch) => {
    return database.ref(`users/${uid}/reminders`).once('value').then((snapshot) => {
        const reminders = [];

        snapshot.forEach((childSnapshot) => {
            reminders.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        dispatch(setReminders(reminders))
    });
}

// CLEAR REMINDER
export const clearReminder = (title) => ({
    type: "CLEAR",
    title
});
export const startClearReminder = (uid, reminderTitle, dispatch) => {
  // First, retrieve all the reminders for the given user from the database
  return database
    .ref(`users/${uid}/reminders`)
    .once("value")
    .then(snapshot => {
      // Check if any of the retrieved reminders has a matching title
      const reminders = snapshot.val();
      if (reminders) {
        const matchingReminder = Object.values(reminders).find(
          r => r.title === reminderTitle
        );
        if (matchingReminder) {
          // Get the key of the matching reminder
          const key = Object.keys(reminders).find(
            k => reminders[k] === matchingReminder
          );

          // Remove the reminder from the database
          return database
            .ref(`users/${uid}/reminders/${key}`)
            .remove()
            .then(() => {
              console.log(`Reminder with title "${reminderTitle}" removed from the database.`);
              dispatch(clearReminder(reminderTitle));
            });
        } else {
          console.log(`No reminder with the title "${reminderTitle}" was found.`);
          return;
        }
      } else {
        console.log("No reminders were found in the database.");
        return;
      }
    });
};
