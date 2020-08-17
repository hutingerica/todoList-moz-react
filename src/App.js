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
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      key={task.id}
      />
  ));
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  

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
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
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
//4.countingList