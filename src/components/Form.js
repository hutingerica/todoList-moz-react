import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={handleChange}
            value={name}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>

    );
}

//callback props: We need a way to pass information from <Form /> to <App />
// we cant pass data from child to parent in the same way as we pass data from parent to child using standard props.
//Instead, we can write a function in <App /> that will expect some data from our form as an input, then pass that function to <Form /> as a prop. This function-as-a-prop is called a callback prop. Once we have our callback prop, we can call it inside <Form /> to send the right data to <App />.

//useState hook
//make a name state & a function for updating the namestate