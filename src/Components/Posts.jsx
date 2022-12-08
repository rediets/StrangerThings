import React, { useState, useEffect } from "react";
import { deletePost, sendMessage } from "../api/auth";

const cohort = '2211-ftb-et-web-ft';

const Posts = ({posts, setPosts, token, userId}) => {
    const [message, setMessage] = useState('');
    const [postId, setPostId] = useState('');

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
            <div key={posts._id} className="single-item-card">
                <div className="header-info">
                  <p className="seller">Seller: {posts.author.username}</p>
                  <p className="post-title">Title: {posts.title}</p>
                  <p className="post-price">Price: {posts.price}</p>
                </div>
                <div>
                    <p className="post-desc">Description: {posts.description}</p>
                        { userId === posts.author._id &&
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                console.log(posts._id);
                                deletePost(token, posts._id, setPosts);
                            }}>
                                <button type="submit">Delete Post</button>
                            </form>
                        }
                        { (userId !== posts.author._id && postId !== posts._id) &&
                            <form onSubmit={ async (e) => {
                                e.preventDefault();
                                setPostId(posts._id);
                            }}>
                                <button type="submit">Send Message</button>
                            </form>
                        }
                        { (userId !== posts.author._id && postId === posts._id) &&
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                console.log(message);
                                sendMessage(token, postId, message);
                                setMessage('');
                                setPostId('');
                            }}>
                                <input
                                    placeholder="Send message to seller..."
                                    value={message}
                                    type="text"
                                    onChange={(e) => setMessage(e.target.value)}
                                ></input>
                                <button type="submit">Send Message</button>
                            </form>
                        }
                </div>
            </div>
            ))}
        </div>
    )
}

export default Posts
