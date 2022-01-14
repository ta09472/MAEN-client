import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, uploadData } from "./redux/module/post";

const Test = () => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(uploadData(input));
    setInput("");
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const postList = posts.map((post) => <li key={post.name}>{post.name}</li>);
  return (
    <div>
      <ul>{postList}</ul>
      <input
        type="text"
        placeholder="input the text"
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Test;
