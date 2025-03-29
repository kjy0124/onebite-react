const Button = ({ buttonColor = "black", buttonText, children }) => {
  return (
    <button style={{ color: buttonColor }}>
      {buttonText} - {buttonColor}
      {children}
    </button>
  );
};

export default Button;
