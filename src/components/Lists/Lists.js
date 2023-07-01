import ListItem from './ListItem';
import { useState } from 'react';

export default function Lists({ lists }) {
  const [openedList, setOpenedList] = useState(null);

  function handleOpenList(id) {
    setOpenedList(id);
  }

  return (
    <ul className="lists title">
      {lists.map((listData) => (
        <ListItem
          openedList={openedList}
          onOpenList={handleOpenList}
          listData={listData}
        />
      ))}
    </ul>
  );
}
