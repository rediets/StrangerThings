import React, { useState, useEffect } from "react";
import "./App.css";

import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import Register from "./Components/RegisterUser";
import LogMeOut from "./Components/LogMeOut";
import LogMeIn from "./Components/LogMeIn";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <div>Under Construction, check back soon...</div>
      <div>
        { !token &&
          <Register setToken={ setToken }/>
        }
        { !token &&
          <LogMeIn setToken={ setToken }/>
        }
        { token &&
          <LogMeOut token={ token } setToken={ setToken }/>
        }
        <Posts />
        <PostForm token={ token } />
      </div>
    </div>
  )
}

export default App;
