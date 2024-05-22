import React from "react";
import "./App.css";
import UserContextProvide from "./context/UserContextProvide";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  // const nahian ={
  //   name:"Nur nahian",
  //   Mobile:"01234567891",
  // }
  return (
    <>
      <UserContextProvide>
        <Login />
        <Profile />
      </UserContextProvide>
    </>
  );
}

export default App;
