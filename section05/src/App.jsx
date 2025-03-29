import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import "./App.css";

function App() {
  const buttonProps = {
    buttonText: "뉴스",
    buttonColor: "orange",
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button buttonColor={"red"} buttonText={"메일"} />
      <Button buttonColor={"green"} buttonText={"카페"} />
      <Button buttonColor={"blue"} buttonText={"블로그"} />
      <Button buttonText={"인기글"}>
        <div>자식임</div>
      </Button>
    </>
  );
}

export default App;
