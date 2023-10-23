export default function ArticleCard({ author, title, topic, comments }) {
  return (
    <section>
      <p>{title}</p>
      is about {topic} and has {comments} comments
      <p>Author: {author}</p>
    </section>
  );
}
