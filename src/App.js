import React from 'react';
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'

function App(props) {
  console.log(props.tasks);
  const taskList = props.tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      />
  ));

  return (
    <div className="todoapp stack-large">
      <Form />
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