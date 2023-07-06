import ListItem from './ListItem';
import { useState } from 'react';

export default function Lists({
  lists,
  onAddTodoItem,
  onEditTodo,
  onDeleteTodoItem,
  onMarkDoneTodo,
}) {
  const [openedList, setOpenedList] = useState(null);
  const [openedDialog, setOpenedDialog] = useState(null);

  function handleOpenList(id) {
    setOpenedDialog(null);
    if (openedList === id) return setOpenedList(null);
    setOpenedList(id);
  }

  function handleOpenCloseDialog(id) {
    if (id === openedDialog) return setOpenedDialog(null);
    setOpenedDialog(id);
  }

  return (
    <ul className="lists title">
      {lists.map((listData, i) => (
        <ListItem
          key={i}
          openedList={openedList}
          onOpenList={handleOpenList}
          listData={listData}
          onAddTodoItem={onAddTodoItem}
          onEditTodo={onEditTodo}
          onDeleteTodoItem={onDeleteTodoItem}
          onMarkDoneTodo={onMarkDoneTodo}
          onOpenCloseDialog={handleOpenCloseDialog}
          openedDialogId={openedDialog}
        />
      ))}
    </ul>
  );
}
