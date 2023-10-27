import { getComments } from "../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useEffect, useState, Fragment } from "react";
import SingleArticleForComments from "./SingleArticleForComments";

export default function CommentList() {
  const { article_id } = useParams();
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setAllComments(comments);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <Loading />;

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
              </Fragment>
            );
          }
        )}
      </ul>
    </>
  );
}
