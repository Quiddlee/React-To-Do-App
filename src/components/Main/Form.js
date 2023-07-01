export default function Form() {
  return (
    <form className="form form-add-todo">
      <input placeholder="New list" className="input title" type="text" />
      <button className="button title form-add-todo__btn">+ Add</button>
    </form>
  );
}
