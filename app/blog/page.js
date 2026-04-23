import SectionTitle from "@/components/SectionTitle";
import CtaBanner from "@/components/CtaBanner";
import { blogPosts } from "@/data/siteData";

export const metadata = {
  title: "Blog | PROENERG AUTO",
  description: "Ghiduri scurte despre mentenanta auto, siguranta si diagnoza preventiva."
};

export default function BlogPage() {
  return (
    <>
      <section className="section topSection">
        <div className="container">
          <SectionTitle
            eyebrow="Resurse utile"
            title="Articole practice pentru intretinerea masinii"
            description="Recomandari usor de aplicat ca sa reduci uzura si sa eviti costuri neprevazute."
          />
          <div className="blogGrid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blogCard">
                <p className="meta">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="textBtn" type="button">
                  Citeste articol
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
