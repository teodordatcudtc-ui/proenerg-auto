export default function ServiceCard({ title, description, price }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
    </article>
  );
}
