import ListItem from './ListItem';
import { useState } from 'react';

export default function Lists({ lists }) {
  const [openedList, setOpenedList] = useState(null);

  function handleOpenList(id) {
    if (openedList === id) return setOpenedList(null);
    setOpenedList(id);
  }

  return (
    <ul className="lists title">
      {lists.map((listData, i) => (
        <ListItem
          key={i}
          openedList={openedList}
          onOpenList={handleOpenList}
          listData={listData}
        />
      ))}
    </ul>
  );
}
