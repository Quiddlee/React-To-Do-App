import TodoListItem from './TodoListItem';
import ButtonAdd from '../../ButtonAdd';

export default function TodoList({
  todos,
  onAddTodoItem,
  currListId,
  onEditTodo,
  listId,
  onDeleteTodoItem,
}) {
  console.log('todos', todos);
  return (
    <>
      <ul className="todo-list">
        {todos.map(({ content, id }) => (
          <TodoListItem
            key={id}
            onEditTodo={onEditTodo}
            todoId={id}
            listId={listId}
            onDeleteTodoItem={onDeleteTodoItem}>
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
