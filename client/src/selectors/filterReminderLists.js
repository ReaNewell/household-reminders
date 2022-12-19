import moment from "moment";

export const filterReminderLists = (reminders) => {
  const due = [];
  const upcoming = [];
  const other = [];

  for (const reminder of reminders) {
    const dueDate = moment(reminder.dueDate);

     // Calculate the number of days until the due date
     const daysUntilDue = dueDate.diff(moment(), "days");

    if (daysUntilDue < 0) {
      due.push(reminder);
    } else if (daysUntilDue >= 0 && daysUntilDue <= 3) {
      upcoming.push(reminder);
    } else {
      other.push(reminder);
    }
  }

  return { due, upcoming, other };
};