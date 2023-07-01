import Header from './components/Header/Header';
import Form from './components/Main/Form';
import Lists from './components/Lists/Lists';
import { useState } from 'react';
import { INITIAL_LISTS } from './config';

function App() {
  const [lists, setLists] = useState(INITIAL_LISTS);

  function handleAddList(newList) {
    setLists((lists) => [...lists, newList]);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form onAddList={handleAddList} />
        <Lists lists={lists} />
      </main>
    </div>
  );
}

export default App;
