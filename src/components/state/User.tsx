import React, { useState } from "react";

type authUser = {
    name: string,
    email: string
}

const User = () => {
  const [user, setUser] = useState<authUser>({} as authUser);

  const handleLogin = () => {
    setUser({
        name: "Akash",
        email: "aakash.sharma413@gmail.com"
    })
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>User's name is {user?.name}</p>
      <p>User's email is {user?.email}</p>
    </div>
  );
};

export default User;
