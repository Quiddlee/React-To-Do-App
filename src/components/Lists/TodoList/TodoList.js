import TodoListItem from './TodoListItem';
import ButtonAdd from '../../ButtonAdd';

export default function TodoList({
  todos,
  onAddTodoItem,
  currListId,
  onEditTodo,
  listId,
  onDeleteTodoItem,
  onMarkDoneTodo,
}) {
  return (
    <>
      <ul className="todo-list">
        {todos.map(({ content, id, isDone }) => (
          <TodoListItem
            key={id}
            onEditTodo={onEditTodo}
            todoId={id}
            listId={listId}
            onDeleteTodoItem={onDeleteTodoItem}
            isDone={isDone}
            onMarkDoneTodo={onMarkDoneTodo}>
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
