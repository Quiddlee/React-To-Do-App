import TodoListItem from './TodoListItem';
import ButtonAdd from '../../ButtonAdd';

export default function TodoList({ todos }) {
  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoListItem key={todo}>{todo}</TodoListItem>
        ))}
      </ul>

      <ButtonAdd customClass="add-list-item">List item</ButtonAdd>
    </>
  );
}
