import React, { useState } from 'react';
import { nanoid } from "nanoid";

import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      />
  ));
  
  function addTask(name){
    const newTask = {id: "todo-" + nanoid(), name: name, completed:"false" };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        // role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;

// aria-pressed
// aria-labelledby
// defaultChecked vs checked
// htmlFor vs for

//1.grab UIs to create todo.js > send props to todo.js > const Data in index.js > send Data to app.js > const taskList from Data and map into <Todo >
//2.unique keys to each <Todo />
//3.addTask function can grab props name into newTask and store into tasks array for taskList by using [tasks and setTasks]