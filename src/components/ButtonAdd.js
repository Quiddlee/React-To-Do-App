export default function ButtonAdd({ customClass = '', children }) {
  return (
    <button className={`button title button--add ${customClass}`}>
      {children}
    </button>
  );
}
