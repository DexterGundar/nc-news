export default function ArticleCard({ img, author, title, topic, comments }) {
  return (
    <section>
      <h4>{title}</h4>

      <img src={img} alt={`a photo of  ${title} `} id="small-image" />

      <p>
        is about {topic} and has {comments} comments
      </p>
      <p>Author: {author}</p>
    </section>
  );
}
