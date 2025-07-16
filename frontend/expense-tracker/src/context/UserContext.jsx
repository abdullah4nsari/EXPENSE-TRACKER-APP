import React, { useContext, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

    //function to update user data
    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    //function to clear user data (on logout)
    const clearUser = ()=>{
        setUser(null);
        localStorage.removeItem("user");
    localStorage.removeItem("token"); // optional
    };

    return (
        <UserContext.Provider
        value={
            {
                user,
                updateUser,
                clearUser,
            }
        }>
            {children}
        </UserContext.Provider>
    );
}