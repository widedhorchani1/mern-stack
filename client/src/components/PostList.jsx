import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          {/* TODO: Render the list of comments for this post */}
        </div>
      ))}
    </div>
  );
};

export default PostList;
