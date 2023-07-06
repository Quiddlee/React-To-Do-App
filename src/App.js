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

  function handleMarkDoneTodo(listId, todoId) {
    setLists((lists) => {
      const newLists = structuredClone(lists);

      newLists.forEach((list) => {
        if (list.id !== listId) return;

        const currTodo = list.todos.find((todo) => todo.id === todoId);
        currTodo.isDone = !currTodo.isDone;
      });

      return newLists;
    });
  }

  function handleDeleteList(listId) {
    setLists((lists) => {
      const newLists = structuredClone(lists);
      return newLists.filter((li) => li.id !== listId);
    });
  }

  function handleEditListTitle(listId, newTitle) {
    setLists((lists) => {
      const newLists = structuredClone(lists);

      newLists.forEach((li) => {
        if (li.id === listId) li.title = newTitle;
      });

      return newLists;
    });
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form onAddList={handleAddList} />
        {lists.length ? (
          <Lists
            lists={lists}
            onAddTodoItem={handleAddTodoItem}
            onEditTodo={handleEditTodo}
            onDeleteTodoItem={handleDeleteTodoItem}
            onMarkDoneTodo={handleMarkDoneTodo}
            onDeleteList={handleDeleteList}
            onEditListTitle={handleEditListTitle}
          />
        ) : (
          <p className="title empty-list">
            The list is empty, add some to-do :)
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
