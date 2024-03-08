import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Articles({ selected_topic }) {
  const { article_id } = useParams();
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("title");

  useEffect(() => {
    getArticles()
      .then((articles) => {
        const filteredArticles =
          selected_topic !== undefined
            ? articles.filter((art) => {
                return art.topic === selected_topic;
              })
            : articles;

        setAllArticles(filteredArticles);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="all-of-them">
      <ul className="article-list">
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
    </div>
  );
}
