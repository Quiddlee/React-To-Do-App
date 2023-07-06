import TodoListItemBtn from './TodoListItemBtn';
import { useState } from 'react';
import Button from '../../utils/Button';

export default function TodoListItem({
  isDone,
  children,
  onEditTodo,
  todoId,
  listId,
  onDeleteTodoItem,
  onMarkDoneTodo,
}) {
  const [todoContent, setTodoContent] = useState(children);

  function handleEnterKeyDown(e) {
    if (e.key !== 'Enter') return;
    e.target.blur();
  }

  return (
    <li className="todo-list__item">
      <TodoListItemBtn
        onMarkDoneTodo={onMarkDoneTodo}
        isDone={isDone}
        listId={listId}
        todoId={todoId}
      />
      {isDone ? <s>{todoContent}</s> : todoContent}
      <input
        onKeyDown={handleEnterKeyDown}
        placeholder="Write some todo..."
        onBlur={() => onEditTodo(listId, todoId, todoContent)}
        onChange={(e) => setTodoContent(e.target.value)}
        value={todoContent}
        className="todo-list__item__edit"
        type="text"
      />
      <Button
        className="todo-list__item__delete"
        onClick={onDeleteTodoItem.bind(null, listId, todoId)}>
        -
      </Button>
    </li>
  );
}
