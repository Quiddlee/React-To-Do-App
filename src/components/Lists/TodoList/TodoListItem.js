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

      <span className={`todo-list__item__content ${isDone ? 'strike' : ''}`}>
        {todoContent}
      </span>
      <input
        style={{ width: `${todoContent.length || 13}ch` }}
        onKeyDown={handleEnterKeyDown}
        placeholder="Write some todo..."
        onBlur={() => onEditTodo(listId, todoId, todoContent)}
        onChange={(e) => setTodoContent(e.target.value)}
        value={todoContent}
        className="todo-list__item__edit input-placeholder"
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
