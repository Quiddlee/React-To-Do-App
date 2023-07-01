import Header from './components/Header/Header';
import Form from './components/Main/Form';
import Lists from './components/Lists/Lists';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form />
        <Lists />
      </main>
    </div>
  );
}

export default App;
