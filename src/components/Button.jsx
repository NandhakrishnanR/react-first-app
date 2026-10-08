function Button({ label, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
}

export default Button;