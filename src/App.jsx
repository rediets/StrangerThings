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
  const [userId, setUserId] = useState('');

  return (

        <div className="App">
          <div>Under Construction, check back soon...</div>
          <div>
            { !token &&
              <Register 
                setToken={ setToken }
              />
            }
            { !token &&
              <LogMeIn 
                setToken={ setToken } 
                setUserId={ setUserId }
              />
            }
            { token &&
              <LogMeOut 
                token={ token } 
                setToken={ setToken }
              />
            }
            { token &&
            <Posts 
              token={ token } 
              posts={posts} 
              setPosts={setPosts}
              userId={ userId }
            />
            }
            { token &&
            <PostForm 
              token={ token } 
              posts={posts} 
              setPosts={setPosts}
            />
            }
          </div>
        </div>

  )
}

export default App;
