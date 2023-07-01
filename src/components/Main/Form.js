import ButtonAdd from '../ButtonAdd';

export default function Form() {
  return (
    <form className="form form-add-todo">
      <input placeholder="New list" className="input title" type="text" />
      <ButtonAdd customClass="form-add-todo__btn">+ Add</ButtonAdd>
    </form>
  );
}
