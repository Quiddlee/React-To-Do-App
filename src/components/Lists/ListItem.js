export default function ListItem({ data: { id, title, todos } }) {
  return (
    <li className={`item title ${id === 1 ? 'active' : ''}`}>
      {title}
      <span className="item__num-of-todos">{todos.length}</span>
      <button className="button title item__more-btn">...</button>
    </li>
  );
}
