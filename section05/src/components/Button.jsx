const Button = ({ text, color, children }) => {
  const safeColor = color || "black"; // undefined일 경우 기본값 적용
  return (
    <button style={{ color: safeColor }}>
      {text} - {safeColor.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
