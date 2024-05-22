import React, { useContext, useState } from "react";
import {UserContext} from "../context/UserContextProvide";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassworde] = useState("");
  const { setUser } = useContext(UserContext);
    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
          />
         <br/>
         <br/>
      <input
        type="text"
        onChange={(e) => setPassworde(e.target.value)}
        placeholder="password"
          />
          <br/>
          <br/>
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default Login;
