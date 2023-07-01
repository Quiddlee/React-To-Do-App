import TodoList from './TodoList/TodoList';

export default function ListItem({
  listData: { id, title, todos },
  onOpenList,
  openedList,
}) {
  return (
    <li onClick={() => onOpenList(id)} className="item">
      <article className={`heading ${id === openedList ? 'active' : ''}`}>
        {title}
        <span className="heading__num-of-todos">{todos.length}</span>
        <button className="button title heading__more-btn">...</button>
      </article>

      {id === openedList && <TodoList todos={todos} />}
    </li>
  );
}
