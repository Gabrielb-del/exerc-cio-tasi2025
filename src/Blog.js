import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(data);
      } catch (error) {
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p>Carregando posts...</p>
      ) : (
        posts.map(({ id, title, body }) => (
          <div key={id} className="post">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;