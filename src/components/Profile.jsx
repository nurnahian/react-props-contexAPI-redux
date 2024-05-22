import React, { useContext } from "react";
import{UserContext} from "../context/UserContextProvide"

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <div>Please Login</div>;
  }
  return (
    <div>
      <h4>{user.username}</h4>
      <h4>{user.password}</h4>
    </div>
  );
}

export default Profile;
