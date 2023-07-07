import ListItem from './ListItem';
import { useState } from 'react';

export default function Lists({
  lists,
  onAddTodoItem,
  onEditTodo,
  onDeleteTodoItem,
  onMarkDoneTodo,
  onDeleteList,
  onEditListTitle,
  isSorted,
}) {
  const [openedList, setOpenedList] = useState(null);
  const [openedDialog, setOpenedDialog] = useState(null);
  let items;

  if (isSorted) {
    items = lists.toSorted((li1, li2) =>
      li1.title.toLowerCase() > li2.title.toLowerCase() ? 1 : -1,
    );
  } else items = lists;

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
      {items.map((listData) => (
        <ListItem
          key={listData.id}
          openedList={openedList}
          onOpenList={handleOpenList}
          listData={listData}
          onAddTodoItem={onAddTodoItem}
          onEditTodo={onEditTodo}
          onDeleteTodoItem={onDeleteTodoItem}
          onMarkDoneTodo={onMarkDoneTodo}
          onOpenCloseDialog={handleOpenCloseDialog}
          openedDialogId={openedDialog}
          onDeleteList={onDeleteList}
          onEditListTitle={onEditListTitle}
        />
      ))}
    </ul>
  );
}
