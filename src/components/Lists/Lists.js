import ListItem from './ListItem';

export default function Lists() {
  return (
    <ul className="lists title">
      <ListItem
        data={{
          id: 0,
          title: 'To-do',
          todos: ['test', 'Banana', 'Blueberries', 'hello'],
        }}></ListItem>

      <ListItem
        data={{
          id: 1,
          title: 'Shopping list',
          todos: ['Bread', 'Banana', 'Blueberries'],
        }}></ListItem>
    </ul>
  );
}
