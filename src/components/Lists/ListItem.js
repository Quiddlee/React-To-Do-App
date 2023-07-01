import TodoList from './TodoList/TodoList';

export default function ListItem({ data: { id, title, todos } }) {
  return (
    <li className="item">
      <div className={`heading ${id === 1 ? 'active' : ''}`}>
        {title}
        <span className="heading__num-of-todos">{todos.length}</span>
        <button className="button title heading__more-btn">...</button>
      </div>

      {id === 1 && <TodoList todos={todos} />}
    </li>
  );
}
