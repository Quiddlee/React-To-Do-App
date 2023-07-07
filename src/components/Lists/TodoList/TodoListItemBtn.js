export default function TodoListItemBtn({
  isDone,
  onMarkDoneTodo,
  listId,
  todoId,
}) {
  return (
    <button
      onClick={() => onMarkDoneTodo(listId, todoId)}
      className="button todo-list__btn">
      <svg
        className={`${isDone ? 'todo-list__icon--done' : 'todo-list__icon'}`}
        width="38"
        height="38"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse
          className="todo-list__icon__body"
          cx="18.7896"
          cy="19.4718"
          rx="18.593"
          ry="18.5094"
        />
        <rect
          className="todo-list__icon__small-rect"
          x="9.92926"
          y="20.0665"
          width="3.01765"
          height="9.18782"
          rx="0.3"
          transform="rotate(-45 9.92926 20.0665)"
        />
        <rect
          className="todo-list__icon__large-rect"
          x="16.15"
          y="3.5"
          width="3.01765"
          height="16.18782"
          rx="0.3"
          transform="rotate(45 9.92926 20.0665)"></rect>
      </svg>
    </button>
  );
}
