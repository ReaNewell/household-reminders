import moment from "moment";
import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const Reminder = (props) => {
  const [editing, setEditing] = useState();
  const { clearReminder, updateReminder } = useContext(AppContext);
  const [state, setState] = useState({
    title: props.title,
    description: props.description ? props.description : "No description.",
    interval: props.interval,
    count: props.count,
    lastCompleted: props.lastCompleted,
    dueDate: props.dueDate
  });

  const handleClearReminder = () => {
    clearReminder(state.title);
  };
  const toggleEditMode = () => {
    if (editing) {
        setState({
            title: props.title,
            description: props.description ? props.description : "No description.",
            interval: props.interval,
            count: props.count,
            lastCompleted: props.lastCompleted
        });
    }
    setEditing(!editing);
  };
  const handleInputChange = (event) => {
    if (event.name === 'lastCompleted') {
      setState({ ...state, [event.target.name]: moment(event.target.value).format("ll")});
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  };
  const handleUpdateReminder = () => {
    const dueDate = moment(state.lastCompleted).add(state.count, state.interval).format('ll');
    updateReminder(props.title, {...state}, dueDate);
    setEditing(false);
  }

  return editing ? (
    <div className="reminder">
      <input
        className="reminder__input reminder__input--title"
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
        value={state.title}
      />
      <input
        className="reminder__input reminder__input--description"
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInputChange}
        value={state.description}
      />
      <select
        className="reminder__input reminder__input--interval"
        name="interval"
        onChange={handleInputChange}
        value={state.interval}
      >
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
      <input
        className="reminder__input reminder__input--count"
        type="number"
        min="1"
        max="30"
        name="count"
        onChange={handleInputChange}
        value={state.count}
      />
      <input
        className="reminder__input reminder__input--lastCompleted"
        type="date"
        name="lastCompleted"
        onChange={handleInputChange}
        value={state.lastCompleted}
      />
      <button onClick={toggleEditMode}>Cancel</button>
      <button onClick={handleClearReminder}>REMOVE</button>
      <button onClick={handleUpdateReminder}>UPDATE</button>
    </div>
  ) : (
    <div className="reminder">
      <h4>{state.title}</h4>
      <p>
        Interval:{" "}
        {state.count +
          " " +
          state.interval.toLowerCase().slice(0, 1).toUpperCase() +
          state.interval.slice(1) +
          (state.count >= 2 ? "s" : "")}
      </p>
      <p>Last Completed: {moment(state.lastCompleted).format("ll")}</p>
      <p>Due: {moment(state.dueDate).format("ll")}</p>
      <button onClick={toggleEditMode}>Edit</button>
    </div>
  );
};

export default Reminder;