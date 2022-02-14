import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');
  const handleAddTodo = () => {
  if (!task || task === '') { return; /* todo: display "Task can't be empty" */ }
    setTodos((currentTodos) => [...currentTodos, {
      id: currentTodos.length ? currentTodos.at(-1).id + 1 : 0,
      label: task,
      checked: false,
    }]);
    setTask('');
    document.getElementById('formInput').focus();
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        id="formInput"
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
