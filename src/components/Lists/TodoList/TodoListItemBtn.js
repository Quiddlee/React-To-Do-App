export default function TodoListItemBtn({ isDone }) {
  return (
    <button className="button todo-list__btn">
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
        <path
          className="todo-list__icon__large-rect"
          d="M25.0833 13.7641C25.2786 13.5688 25.5951 13.5688 25.7904 13.7641L27.1525 15.1262C27.3478 15.3215 27.3478 15.638 27.1525 15.8333L18.3399 24.6458C18.1447 24.8411 17.8281 24.8411 17.6328 24.6458L16.2707 23.2838C16.0755 23.0885 16.0755 22.7719 16.2707 22.5766L25.0833 13.7641Z"
        />
      </svg>
    </button>
  );
}
