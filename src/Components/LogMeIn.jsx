import React from "react";
import { useState } from "react";

import { login } from "../api/auth";

const LogMeIn = ({setToken}) => {
    const [username, setUsername] =
    useState("");
    const [password, setPassword] =
    useState("");
    if (localStorage.token) {
        setToken(localStorage.token);
    }
    // const [passwordError, setPasswordError] =
    // useState("");
    return (
        <div className="login-bar">
            <form
               onSubmit={async (e) => {
                try {
                    e.preventDefault();
                    console.log(password, username);
                    const token = await login(username, password);
                    setToken(token);
                    console.log(token);
                    localStorage.setItem("token", token);
                    setUsername("");
                    setPassword("");
                }   catch(error)   {
                    console.error()
                }
               }}
            >
                <label htmlFor="username">Username: </label>
                <input 
                  value={username}
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                ></input>

                <label htmlFor="password">Password: </label>
                <input 
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>

                <button type="submit">Log In</button>
                {/* <div className="passwordError">{passwordError}</div> */}
            </form>
        </div>
    );
};

export default LogMeIn