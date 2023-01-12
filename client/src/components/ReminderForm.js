import moment from "moment";
import React, { useContext, useState } from "react";

import { AppContext } from "../contexts/AppContext";

const ReminderForm = () => {
  const { addNewReminder } = useContext(AppContext);
  const [active, setActive] = useState(false)

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    interval: "day",
    count: 1,
    lastCompleted: moment().format("ll")
  });

  const handleToggleActive = () => {
    setActive(!active);
  };
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
    handleToggleActive();
  };

  return active ? (
    <div className="reminder-form__container">
      <div className="reminder-form">
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
          className="reminder-form__input reminder-form__input--last-completed"
          type="date"
          name="lastCompleted"
          onChange={handleInputChange}
          value={formState.lastCompleted}
        />
        <button class="reminder-form__button reminder-form__button--cancel" onClick={handleToggleActive}>Cancel</button>
        <button class="reminder-form__button" onClick={handleAddNewReminder}>ADD</button>
      </div>
    </div>
  ) :  (
    <div className="reminder-form__toggle" onClick={handleToggleActive}>
      <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1183 9.625H18.2486V17.125H10.5093V20.875H18.2486V28.375H22.1183V20.875H29.8577V17.125H22.1183V9.625ZM20.1835 0.25C9.50317 0.25 0.835083 8.65 0.835083 19C0.835083 29.35 9.50317 37.75 20.1835 37.75C30.8638 37.75 39.5319 29.35 39.5319 19C39.5319 8.65 30.8638 0.25 20.1835 0.25ZM20.1835 34C11.6508 34 4.70476 27.2687 4.70476 19C4.70476 10.7313 11.6508 4 20.1835 4C28.7161 4 35.6622 10.7313 35.6622 19C35.6622 27.2687 28.7161 34 20.1835 34Z" fill="#706B67"/>
      </svg>
    </div>
  );
};

export default ReminderForm;
