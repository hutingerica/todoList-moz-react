import React, { useState } from 'react';
import './Form.css'

export default function Form(props){
    const[name, setName] = useState('');

    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.addTask(name);
        setName("")
    }

    return(
        <form onSubmit={handleSubmit} className="task-form">
            <div className="task-add-input">
                <input
                type="text"
                id="new-todo-input"
                placeholder="What do you want to do ?"
                name="text"
                autoComplete="off"
                onChange={handleChange}
                value={name}
                />
            </div>
            <button type="submit" className="task-add-btn">
                <svg viewBox="0 0 40 40">
                    <path d="M10 20 L30 20 M20 10 L20 30" />
                </svg>
            </button>
        </form>

    );
}

//callback props: We need a way to pass information from <Form /> to <App />
// we cant pass data from child to parent in the same way as we pass data from parent to child using standard props.
//Instead, we can write a function in <App /> that will expect some data from our form as an input, then pass that function to <Form /> as a prop. This function-as-a-prop is called a callback prop. Once we have our callback prop, we can call it inside <Form /> to send the right data to <App />.

//useState hook
//make a name state & a function for updating the namestate