import ButtonAdd from '../utils/ButtonAdd';
import { useState } from 'react';

export default function Form({ onAddList }) {
  const [listTitle, setListTitle] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();

    if (listTitle === '') return;

    const newList = {
      id: crypto.randomUUID(),
      title: listTitle,
      todos: [],
    };

    setListTitle('');
    onAddList(newList);
  }

  return (
    <form onSubmit={(e) => handleSubmitForm(e)} className="form form-add-todo">
      <input
        value={listTitle}
        onChange={(e) => setListTitle(e.target.value)}
        placeholder="New list"
        className="input title"
        type="text"
      />
      <ButtonAdd isOpen={true} customClass="form-add-todo__btn">
        Add
      </ButtonAdd>
    </form>
  );
}
