import TodoListItem from './TodoListItem';

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem key={todo}>{todo}</TodoListItem>
      ))}
    </ul>
  );
}
