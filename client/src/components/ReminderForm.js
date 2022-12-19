import moment from "moment";
import React, { useContext, useState } from "react";

import { AppContext } from "../contexts/AppContext";

const ReminderForm = () => {
  const { addNewReminder } = useContext(AppContext);

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    interval: "day",
    count: 1,
    lastCompleted: moment().format("ll")
  });

  const handleInputChange = (event) => {
    if (event.name === 'lastCompleted') {
      setFormState({ ...formState, [event.target.name]: moment(event.target.value).format("ll")});
    } else {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  const handleAddNewReminder = () => {
    const dueDate = moment(formState.lastCompleted).add(formState.count, formState.interval).format('ll');
    addNewReminder(formState, dueDate);
    console.log(`Reminder added: ${formState} and is due ${moment(dueDate).format('ll')}`);
  };

  return (
    <div className="reminder-form">
      <h2>New Reminder Form</h2>
      <input
        className="reminder-form__input reminder-form__input--title"
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
        value={formState.title}
      />
      <input
        className="reminder-form__input reminder-form__input--description"
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInputChange}
        value={formState.description}
      />
      <select
        className="reminder-form__input reminder-form__input--interval"
        name="interval"
        onChange={handleInputChange}
        value={formState.interval}
      >
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
      <input
        className="reminder-form__input reminder-form__input--count"
        type="number"
        min="1"
        max="30"
        name="count"
        onChange={handleInputChange}
        value={formState.count}
      />
      <input 
        className="reminder-form__input reminder-form__input--lastCompleted"
        type="date"
        name="lastCompleted"
        onChange={handleInputChange}
        value={formState.lastCompleted}
      />
      <button onClick={handleAddNewReminder}>ADD</button>
    </div>
  );
};

export default ReminderForm;
