import SortBtn from './SortBtn';

export default function Header({ onSortItems }) {
  return (
    <header className="header">
      <h1 className="header__title">Lists</h1>
      <SortBtn onSortItems={onSortItems}></SortBtn>
    </header>
  );
}
