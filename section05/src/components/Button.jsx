const Button = ({ buttonColor = "black", buttonText, children }) => {
  const onClickBtn = (e) => {
    console.log(e);
  };

  return (
    <button onClick={onClickBtn} style={{ color: buttonColor }}>
      {buttonText} - {buttonColor}
      {children}
    </button>
  );
};

export default Button;
