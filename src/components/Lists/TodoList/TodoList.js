import TodoListItem from './TodoListItem';
import ButtonAdd from '../../utils/ButtonAdd';

export default function TodoList({
  todos,
  onAddTodoItem,
  currListId,
  onEditTodo,
  listId,
  onDeleteTodoItem,
  onMarkDoneTodo,
  openedList,
}) {
  return (
    <>
      <ul
        className={`todo-list ${
          openedList === listId ? '' : 'hidden hidden--list'
        }`}>
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
        isOpen={openedList === listId}
        onAddTodoItem={onAddTodoItem}
        customClass="add-list-item"
        currListId={currListId}>
        List item
      </ButtonAdd>
    </>
  );
}
