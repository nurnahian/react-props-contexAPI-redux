// src/Profile.js
import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const userinfo = useSelector((state) => state.todo);
  console.log(userinfo);
  const { username, password } = userinfo;

  return (
    <div>
      <h4>Username: {username}</h4>
      <h4>Password: {password}</h4>
    </div>
  );
}

export default Profile;