import Header from './components/Header/Header';
import Form from './components/Main/Form';
import Lists from './components/Lists/Lists';
import ButtonAdd from './components/ButtonAdd';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form />
        <Lists />
        <ButtonAdd customClass="add-list-item">List item</ButtonAdd>
      </main>
    </div>
  );
}

export default App;
