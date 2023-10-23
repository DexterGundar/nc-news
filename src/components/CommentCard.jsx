export default function CommentCard({ body, author, votes, created_at }) {
  return (
    <section>
      <p>
        {author} | {created_at}
      </p>
      {body}
      <p>Votes: {votes}</p>
    </section>
  );
}
