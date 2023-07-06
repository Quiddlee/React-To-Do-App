import TodoList from './TodoList/TodoList';
import Button from '../utils/Button';
import Dialog from '../utils/Dialog';

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
}) {
  function validateOpenCloseDialog(e, id) {
    e.stopPropagation();
    onOpenCloseDialog(id);
  }

  function validateDeleteList(e, id) {
    e.stopPropagation();
    onDeleteList(id);
  }

  return (
    <li className="item">
      <article
        onClick={() => onOpenList(id)}
        className={`heading ${id === openedList ? 'active' : ''}`}>
        {title}

        <span className="heading__num-of-todos">{todos.length}</span>

        <Button
          className="heading__more-btn"
          onClick={(e) => validateOpenCloseDialog(e, id)}>
          ...
        </Button>

        {openedDialogId === id ? (
          <Dialog>
            <Button className="dialog__option">Edit</Button>
            <Button
              className="dialog__option"
              onClick={(e) => validateDeleteList(e, id)}>
              Delete
            </Button>
          </Dialog>
        ) : (
          ''
        )}
      </article>

      {id === openedList && (
        <TodoList
          todos={todos}
          onAddTodoItem={onAddTodoItem}
          currListId={id}
          onEditTodo={onEditTodo}
          listId={id}
          onDeleteTodoItem={onDeleteTodoItem}
          onMarkDoneTodo={onMarkDoneTodo}
        />
      )}
    </li>
  );
}
