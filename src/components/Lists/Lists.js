import ListItem from './ListItem';

export default function Lists({ lists }) {
  return (
    <ul className="lists title">
      {lists.map((list) => (
        <ListItem data={list} />
      ))}
    </ul>
  );
}
