import React from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  // const nahian ={
  //   name:"Nur nahian",
  //   Mobile:"01234567891",
  // }
  return (
    <>
      <Provider store={store}>
        <Login />
        <Profile />
      </Provider>
      ,
    </>
  );
}

export default App;
