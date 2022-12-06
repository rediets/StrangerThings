

import React, { useState, useEffect } from "react";
import "./App.css";

import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import Register from "./Components/RegisterUser";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);



  return (
    <div className="App">
      <div>Under Construction, check back soon...</div>
      <div>
        <Register setToken = {setToken}/>
        <Posts />
        <PostForm />
      </div>
    </div>
  )
}

export default App;
