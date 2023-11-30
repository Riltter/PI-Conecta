import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("user_token");
    const storedUsers = localStorage.getItem("users_db");

    if (storedToken && storedUsers) {
      const users = JSON.parse(storedUsers);
      const currentUser = users.find((user) => user.email === JSON.parse(storedToken).email);

      if (currentUser) {
        setUser(currentUser);
      }
    }

    return () => {
      // Remover o event listener "unload" não é mais necessário
      // window.removeEventListener("unload", handleUnload);
    };
  }, []);

  const signin = (email, password) => {
    const token = Math.random().toString(36).substring(2);
    const newUser = { email, password };

    localStorage.setItem("user_token", JSON.stringify({ email, token }));
    localStorage.setItem("users_db", JSON.stringify([newUser]));
    setUser(newUser);
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
