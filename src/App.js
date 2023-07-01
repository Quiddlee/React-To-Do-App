import Header from './components/Header/Header';
import Form from './components/Main/Form';
import Lists from './components/Lists/Lists';
import ButtonAdd from './components/ButtonAdd';
import { useState } from 'react';
import { INITIAL_LISTS } from './config';

function App() {
  const [lists, setLists] = useState(INITIAL_LISTS);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form />
        <Lists lists={lists} />
        <ButtonAdd customClass="add-list-item">List item</ButtonAdd>
      </main>
    </div>
  );
}

export default App;
