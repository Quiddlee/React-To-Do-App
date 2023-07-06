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

  function handleAddTodoItem(listId, newTodoItem) {
    setLists((lists) => {
      const newLists = structuredClone(lists);

      newLists.forEach(
        (list) => list.id === listId && list.todos.push(newTodoItem),
      );

      return newLists;
    });
  }

  function handleEditTodo(listId, todoId, newTodoContent) {
    setLists((lists) => {
      const newLists = structuredClone(lists);

      newLists.forEach((list) => {
        if (list.id !== listId) return;

        list.todos.forEach((todo) => {
          if (todo.id === todoId) todo.content = newTodoContent;
        });
      });

      return newLists;
    });
  }

  function handleDeleteTodoItem(listId, todoId) {
    setLists((lists) => {
      const newLists = structuredClone(lists);

      newLists.forEach((list) => {
        if (list.id === listId)
          list.todos = list.todos.filter((todo) => todo.id !== todoId);
      });

      return newLists;
    });
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form onAddList={handleAddList} />
        <Lists
          lists={lists}
          onAddTodoItem={handleAddTodoItem}
          onEditTodo={handleEditTodo}
          onDeleteTodoItem={handleDeleteTodoItem}
        />
      </main>
    </div>
  );
}

export default App;
