import TodoList from './TodoList/TodoList';

export default function ListItem({
  listData: { id, title, todos },
  onOpenList,
  openedList,
  onAddTodoItem,
  onEditTodo,
}) {
  return (
    <li className="item">
      <article
        onClick={() => onOpenList(id)}
        className={`heading ${id === openedList ? 'active' : ''}`}>
        {title}
        <span className="heading__num-of-todos">{todos.length}</span>
        <button className="button title heading__more-btn">...</button>
      </article>

      {id === openedList && (
        <TodoList
          todos={todos}
          onAddTodoItem={onAddTodoItem}
          currListId={id}
          onEditTodo={onEditTodo}
          listId={id}
        />
      )}
    </li>
  );
}
