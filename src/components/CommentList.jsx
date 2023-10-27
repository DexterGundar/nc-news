import { deleteComment, getComments } from "../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useEffect, useState, Fragment, useContext } from "react";
import SingleArticleForComments from "./SingleArticleForComments";
import { UserContext } from "../UserContext";
import ErrorPage from "./ErrorPage";

export default function CommentList() {
  const { article_id } = useParams();
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(UserContext);
  const [disableDeleteBtn, setDisableDeleteBtn] = useState(false);
  const [isError, setIsError] = useState({});

  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setAllComments(comments);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError({ message: err.message });
      });
  }, [article_id]);

  function handleDeleteComment(comment_id) {
    setDisableDeleteBtn(true);
    deleteComment(comment_id)
      .then((res) => {
        const commentsRemaining = allComments.filter(
          (comment) => comment.comment_id !== comment_id
        );
        setAllComments(commentsRemaining);
        setDisableDeleteBtn(false);
      })
      .catch((err) => {
        setDisableDeleteBtn(false);
        setIsError({ message: err.message });
      });
  }

  if (loading) return <Loading />;
  if (isError.message) return <ErrorPage />;

  return (
    <>
      <SingleArticleForComments setAllComments={setAllComments} />
      <h2>Comments</h2>
      <ul className="comment-list">
        {allComments.map(
          (
            { comment_id, body, author, created_at, article_id, votes },
            index
          ) => {
            return (
              <Fragment key={index}>
                <li>
                  <CommentCard
                    body={body}
                    author={author}
                    votes={votes}
                    created_at={created_at}
                  />
                </li>
                <button
                  disabled={currentUser.username !== author || disableDeleteBtn}
                  type="button"
                  onClick={() => handleDeleteComment(comment_id)}
                >
                  Delete comment
                </button>
              </Fragment>
            );
          }
        )}
      </ul>
    </>
  );
}
