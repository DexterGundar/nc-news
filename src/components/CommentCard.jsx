export default function CommentCard({ body, author, votes, created_at }) {
  return (
    <article>
      <p>
        {author} | {created_at}
      </p>
      {body}
      <p>Votes: {votes}</p>
    </article>
  );
}
