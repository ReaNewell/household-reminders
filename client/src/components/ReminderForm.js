import React, { useState } from 'react';

const ReminderForm = () => {
    const [title, setTitle] = useState(""); 
    const [interval, setinterval] = useState("");

    const handleChangeTitle = () => {
        const inputText = document.getElementsByClassName('reminder-form__input--title');
        setTitle(inputText.value);
        console.log("input recieved", inputText);
    };
    const handleChangeinterval = () => {
        const value = document.getElementsByClassName('reminder-form__input--interval');
    };
    const handleChangeIntervalCount = () => {
        const value = document.getElementsByClassName('reminder-form__input--interval-count');
    }

    return (
        <div className='reminder-form'>
            <input 
                className='reminder-form__input reminder-form__input--title'
                placeholder="Reminder Name"
                value={title}
                type="text"
                onChange={() => {handleChangeTitle()}}
            />
            <input 
                className='reminder-form__input reminder-form__input--interval'
                placeholder="A short interval." 
                value={interval}
                onChange={() => {handleChangeinterval}}
            />
            <input
                className='reminder-form__input reminder-form__input--interal-count'
                placeholder='1'
                type='number'
                onChange={() => {handleChangeIntervalCount}}
            />
        </div>
    )
}

export default ReminderForm;