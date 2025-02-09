const Button = ({ text, color, children }) => {
  const safeColor = color || "black"; // undefined일 경우 기본값 적용
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton} //마우스 커서 올렸을 때 동작
      style={{ color: safeColor }}
    >
      {text} - {safeColor.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
