import { getArticleById } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function SingleArticleForComments() {
  const { article_id } = useParams();
  const [articleForComments, setArticleForComments] = useState({});
  const [loading, setLoading] = useState(true);

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

  const { title, author, topic, body, article_img_url } = articleForComments;

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
    </>
  );
}
