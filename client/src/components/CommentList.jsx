import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.content}</p>
          <p>Author: {comment.author}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
