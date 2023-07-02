import TodoListItem from './TodoListItem';
import ButtonAdd from '../../ButtonAdd';

export default function TodoList({
  todos,
  onAddTodoItem,
  currListId,
  onEditTodo,
  listId,
}) {
  return (
    <>
      <ul className="todo-list">
        {todos.map(({ content, id }, i) => (
          <TodoListItem
            key={i}
            onEditTodo={onEditTodo}
            todoId={id}
            listId={listId}>
            {content}
          </TodoListItem>
        ))}
      </ul>

      <ButtonAdd
        onAddTodoItem={onAddTodoItem}
        customClass="add-list-item"
        currListId={currListId}>
        List item
      </ButtonAdd>
    </>
  );
}
