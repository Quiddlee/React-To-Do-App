import TodoListItemBtn from './TodoListItemBtn';

export default function TodoListItem({ isDone, children }) {
  return (
    <li className="todo-list__item">
      <TodoListItemBtn />
      {isDone ? <s>{children}</s> : children}
    </li>
  );
}
