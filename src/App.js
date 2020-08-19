import React, { useState } from 'react';
import { nanoid } from "nanoid";
import './App.css'

import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      key={task.id}
      />)
    );

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} on the list`;

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  function addTask(name){
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if(id === task.id) {
        return {...task, "completed": !task.completed }
      }
      return task;
    })
    setTasks(updatedTasks);
    console.log(updatedTasks)

  };

  function deleteTask(id){
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(newName,id){
    console.log(newName)
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, "name": newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="app">
      <Form addTask={addTask} />
      <div className="status">
        <h2 id="list-heading">{headingText}</h2>
        <div className="toggle-wrap">{filterList}</div>
      </div>
      <ul
        // role="list"
        className="task-list"
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
//4.countingList