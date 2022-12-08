import React, { useState, useEffect } from "react";

const cohort = '2211-ftb-et-web-ft';

const Posts = ({posts, setPosts, token}) => {
   

    useEffect(() => {
        fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`,{
            headers: {
                'Authorization':`Bearer ${token}`
            }
        })
            .then(result => result.json())
            .then(
                (result) => {
                    setPosts(result.data.posts);
                    console.log(result.data.posts);
                },
            (error) => {
                console.log(error);
            }
            )
    }, [])

    return (
        <div className="posts-container">
            {posts.map(posts => (
                <div key={posts._id} className="single-player-card">
                <div className="header-info">
                  <p className="post-title">{posts.title}</p>
                  <p className="post-price">{posts.price}</p>
                </div>
                <div>
                    <p className="post-desc">{posts.description}</p>
                </div>
              </div>
            ))}
        </div>
    )
}

export default Posts
