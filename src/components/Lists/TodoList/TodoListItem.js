import TodoListItemBtn from './TodoListItemBtn';
import { useState } from 'react';

export default function TodoListItem({
  isDone,
  children,
  onEditTodo,
  todoId,
  listId,
}) {
  const [todoContent, setTodoContent] = useState(children);

  return (
    <li className="todo-list__item">
      <TodoListItemBtn />
      {isDone ? <s>{todoContent}</s> : todoContent}
      <input
        placeholder="Write some todo..."
        onBlur={() => onEditTodo(listId, todoId, todoContent)}
        onChange={(e) => setTodoContent(e.target.value)}
        value={todoContent}
        className="todo-list__item__edit"
        type="text"
      />
    </li>
  );
}
