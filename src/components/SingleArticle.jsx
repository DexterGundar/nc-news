import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [article_id]);

  const { title, author, topic, body, article_img_url, comment_count, votes } =
    article;

  if (loading) return <Loading />;
  return (
    <>
      <h2>{title}</h2>
      <img
        src={article_img_url}
        alt={`a photo of  ${title} `}
        id="medium-image"
      />
      <p>{body}</p>
      <p>Topic: {topic}</p>
      by {author}
      <Link to={`/articles/${article_id}/comments`}>
        <p>
          Click to login for voting and comments: Comments: {comment_count} |
          Votes: {votes}
        </p>
      </Link>
    </>
  );
}
