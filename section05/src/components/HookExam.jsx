import useInput from "./../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();
  return (
    <>
      <input type="text" onChange={onChange} value={input} />
    </>
  );
};

export default HookExam;
