import { getArticleById, patchArticleVotes } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import AddComment from "./AddComment";

export default function SingleArticleForComments({ setAllComments }) {
  const { article_id } = useParams();
  const [articleForComments, setArticleForComments] = useState({});
  const [loading, setLoading] = useState(true);
  const [userLikes, setUserLikes] = useState(0);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticleForComments(article);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [article_id]);

  const { title, author, topic, body, article_img_url, votes } =
    articleForComments;

  function handleAddVote(value) {
    patchArticleVotes(article_id, value).catch(() => {
      setUserLikes(0);
      setIsError(true);
    });
    setUserLikes((currentLikes) => {
      return currentLikes + value;
    });
  }

  if (loading) return <Loading />;

  return (
    <div className="single-article">
      <h2>{title}</h2>
      <img
        src={article_img_url}
        alt={`a photo of  ${title} `}
        id="medium-image"
      />
      <p>{body}</p>
      {!isError ? (
        <button
          disabled={userLikes === 1}
          onClick={() => {
            handleAddVote(1);
          }}
        >
          I like this article
        </button>
      ) : (
        <p>voting not available</p>
      )}
      <p>Topic: {topic}</p>
      by {author}
      <p>Votes: {votes + userLikes}</p>
      <AddComment article_id={article_id} setAllComments={setAllComments} />
    </div>
  );
}
