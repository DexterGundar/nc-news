import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Articles() {
  const { article_id } = useParams();
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setAllArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <ul>
        {allArticles.map(
          ({ article_id, author, title, topic, comment_count }) => {
            return (
              <li className="article-card" key={article_id}>
                <Link to={`/articles/${article_id}`}>
                  <ArticleCard
                    author={author}
                    title={title}
                    topic={topic}
                    comments={comment_count}
                  />
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
