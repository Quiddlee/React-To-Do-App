import TodoList from './TodoList/TodoList';
import Button from '../utils/Button';
import Dialog from '../utils/Dialog';
import { useState } from 'react';

export default function ListItem({
  listData: { id, title, todos },
  onOpenList,
  openedList,
  onAddTodoItem,
  onEditTodo,
  onDeleteTodoItem,
  onMarkDoneTodo,
  onOpenCloseDialog,
  openedDialogId,
  onDeleteList,
  onEditListTitle,
}) {
  const [listTitle, setListTitle] = useState(title);

  function validateOpenCloseDialog(e, id) {
    e.stopPropagation();
    onOpenCloseDialog(id);
  }

  function validateDeleteList(e, id) {
    e.stopPropagation();
    onDeleteList(id);
  }

  function handleEnterKeyDown(e) {
    if (e.key !== 'Enter') return;
    e.target.blur();
  }

  return (
    <li className={`item ${id === openedList ? 'item--active' : ''}`}>
      {openedDialogId === id ? (
        <Dialog>
          <Button
            className="dialog__option"
            onClick={(e) => validateDeleteList(e, id)}>
            Delete
          </Button>
        </Dialog>
      ) : (
        ''
      )}
      <article
        onClick={() => onOpenList(id)}
        className={`heading ${id === openedList ? 'active' : ''}`}>
        <input
          style={{ width: `${listTitle.length}ch` }}
          placeholder="Write some list title..."
          onKeyDown={handleEnterKeyDown}
          onBlur={() => onEditListTitle(id, listTitle)}
          onClick={(e) => e.stopPropagation()}
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          type="text"
          className="heading__edit-title input-placeholder"
        />

        <span className="heading__num-of-todos">{todos.length}</span>

        <Button
          className="heading__more-btn"
          onClick={(e) => validateOpenCloseDialog(e, id)}>
          ...
        </Button>
      </article>

      <TodoList
        openedList={openedList}
        todos={todos}
        onAddTodoItem={onAddTodoItem}
        currListId={id}
        onEditTodo={onEditTodo}
        listId={id}
        onDeleteTodoItem={onDeleteTodoItem}
        onMarkDoneTodo={onMarkDoneTodo}
      />
    </li>
  );
}
