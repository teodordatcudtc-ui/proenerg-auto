export default function TestimonialCard({ name, text, rating }) {
  return (
    <article className="testimonialCard">
      <p className="stars">{"★".repeat(rating)}</p>
      <p>{text}</p>
      <strong>{name}</strong>
    </article>
  );
}
