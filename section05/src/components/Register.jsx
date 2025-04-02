import { useRef, useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);

  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={input.name}
          placeholder="name"
          onChange={onChange}
        />
        {input.name}
      </div>
      <div>
        <input
          type="date"
          name="birth"
          value={input.birth}
          onChange={onChange}
        />
        {input.birth}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="">선택</option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="JP">일본</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </>
  );
};
export default Register;
