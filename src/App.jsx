import React, { useState, useEffect } from "react";
import "./App.css";

import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <div>Under Construction, check back soon...</div>
      <div>
        <Posts />
        <PostForm />
      </div>
    </div>
  )
}

export default App;
