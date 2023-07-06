export default function Button({ className, children, onClick }) {
  return (
    <button onClick={onClick} className={`button title ${className}`}>
      {children}
    </button>
  );
}
