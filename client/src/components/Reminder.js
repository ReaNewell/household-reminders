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
    <div className="reminder--editing">
      <input
        className="reminder--editing__input reminder--editing__input--title"
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
        value={state.title}
      />
      <input
        className="reminder--editing__input reminder--editing__input--description"
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInputChange}
        value={state.description}
      />
      <select
        className="reminder--editing__input reminder--editing__input--interval"
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
        className="reminder--editing__input reminder--editing__input--count"
        type="number"
        min="1"
        max="30"
        name="count"
        onChange={handleInputChange}
        value={state.count}
      />
      <input
        className="reminder--editing__input reminder--editing__input--last-completed"
        type="date"
        name="lastCompleted"
        onChange={handleInputChange}
        value={state.lastCompleted}
      />
      <button className="reminder--editing__button reminder--editing__button--cancel" onClick={toggleEditMode}>Cancel</button>
      <button className="reminder--editing__button reminder--editing__button--remove" onClick={handleClearReminder}>REMOVE</button>
      <button className="reminder--editing__button reminder--editing__button--update" onClick={handleUpdateReminder}>UPDATE</button>
    </div>
  ) : (
    <div className="reminder">
      <div className="reminder__info">
        <h4 className="reminder__info--title">{state.title}</h4>
        <p className="reminder__info--caption">Due: {moment(state.dueDate).format("ll")}</p>
      </div>
      <div className='reminder__buttons'>
        <button className="reminder__button">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.36364 12.0455L1.59091 7.27273L0 8.86364L6.36364 15.2273L20 1.59091L18.4091 0L6.36364 12.0455Z" fill="#908881"/>
          </svg>
        </button>
        <button className="reminder__button" onClick={toggleEditMode}>
          <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.66669 0.222229C2.13892 0.222229 0.888916 1.47223 0.888916 3.00001C0.888916 4.52778 2.13892 5.77778 3.66669 5.77778C5.19447 5.77778 6.44447 4.52778 6.44447 3.00001C6.44447 1.47223 5.19447 0.222229 3.66669 0.222229ZM20.3334 0.222229C18.8056 0.222229 17.5556 1.47223 17.5556 3.00001C17.5556 4.52778 18.8056 5.77778 20.3334 5.77778C21.8611 5.77778 23.1111 4.52778 23.1111 3.00001C23.1111 1.47223 21.8611 0.222229 20.3334 0.222229ZM12 0.222229C10.4722 0.222229 9.22225 1.47223 9.22225 3.00001C9.22225 4.52778 10.4722 5.77778 12 5.77778C13.5278 5.77778 14.7778 4.52778 14.7778 3.00001C14.7778 1.47223 13.5278 0.222229 12 0.222229Z" fill="#918881"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Reminder;