import { useState, useContext, useEffect } from "react";
import { postComment } from "../api";
import { UserContext } from "../UserContext";

import ErrorPage from "./ErrorPage";

export default function AddComment({ article_id, setAllComments }) {
  const [isAdding, setIsAdding] = useState(true);
  const { currentUser } = useContext(UserContext);
  const [isError, setIsError] = useState({});
  const [newAddedComment, setNewAddedComment] = useState("");
  const [commentAdded, setCommentAdded] = useState(false);
  const [newComment, setNewComment] = useState({
    username: currentUser.username,
    body: "",
    article_id: article_id,
    name: currentUser.name,
  });

  function updateNewComment(key, value) {
    setNewComment((currentComment) => {
      return { ...currentComment, [key]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCommentAdded(true);
    postComment(article_id, newComment)
      .then((data) => {
        setNewAddedComment(data.comment.body);
        setAllComments((currentComments) => {
          return [data.comment, ...currentComments];
        });
        setNewComment({
          username: currentUser.username,
          body: "",
          article_id: article_id,
          name: currentUser.name,
        });
        setIsAdding(false);
      })
      .catch((err) => {
        setIsError({ message: err.message });
      });
  }

  if (isError.message) return <ErrorPage />;

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="body">Comment: </label>
        <input
          required
          name="body"
          type="text"
          onChange={(event) => {
            setIsAdding(true);
            setNewAddedComment();
            updateNewComment("body", event.target.value);
          }}
          value={newComment.body}
        />
        <p>
          <button disabled={commentAdded} type="submit">
            Add comment!
          </button>
        </p>
        <p> {!isAdding ? `Comment "${newAddedComment}" added` : ""}</p>
      </form>
    </>
  );
}
