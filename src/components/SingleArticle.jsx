import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState({});

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError({ message: err.message });
      });
  }, [article_id]);

  const { title, author, topic, body, article_img_url, comment_count, votes } =
    article;

  if (loading) return <Loading />;
  if (isError.message) return <ErrorPage />;
  return (
    <div className="allArticles">
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
        <p>Click HERE to login for voting and comments.</p>
        <p>
          Comments: {comment_count} | Votes: {votes}
        </p>
      </Link>
    </div>
  );
}
