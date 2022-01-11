import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("api/hello/all")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleClick = () => {
    console.log(input);
    axios
      .post("api/hello", {
        name: input,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    console.log(input);
    axios
      .delete("api/hello/1", {})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="input the text"
        onChange={handleInputChange}
      ></input>
      <button onClick={handleClick}>submit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Test;
