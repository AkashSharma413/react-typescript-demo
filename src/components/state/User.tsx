import React, { useState } from "react";

type authUser = {
    name: string,
    email: string
}

const User = () => {
  const [user, setUser] = useState<null | authUser>(null);

  const handleLogin = () => {
    setUser({
        name: "Akash",
        email: "aakash.sharma413@gmail.com"
    })
  };
  const handleLogout = () => {};
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User's name is {user?.name}</p>
      <p>User's email is {user?.email}</p>
    </div>
  );
};

export default User;
