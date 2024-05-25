import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../app/features/todo/todoSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassworde] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(setValue({ username, password }));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setPassworde(e.target.value)}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default Login;
