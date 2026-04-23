import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBanner from "@/components/CtaBanner";
import { company, services, testimonials, blogPosts } from "@/data/siteData";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section experienceBand">
        <div className="container">
          <h2 className="experienceTitle">Bazat pe peste 24 de ani de experienta, iti oferim servicii la cel mai bun nivel</h2>
        </div>
      </section>

      <section className="section featuresSection">
        <div className="container featureRow">
          <article>
            <h3>Diagnoza precisa</h3>
            <p>Folosim echipamente moderne pentru identificarea rapida si corecta a defectiunilor.</p>
          </article>
          <article>
            <h3>Gama completa de servicii</h3>
            <p>De la revizii periodice pana la reparatii complexe, acoperim toate nevoile masinii tale.</p>
          </article>
          <article>
            <h3>Echipamente profesionale</h3>
            <p>Lucram cu aparatura performanta si piese verificate pentru rezultate durabile.</p>
          </article>
        </div>
      </section>

      <section className="section serviceSection">
        <div className="container">
          <div className="splitHeading">
            <div>
              <h2>Serviciile noastre de reparatii auto</h2>
              <p>
                La PROENERG AUTO oferim servicii complete pentru a mentine masina in stare excelenta de
                functionare, in conditii de siguranta.
              </p>
            </div>
            <a className="primaryBtn" href={`tel:${company.phone}`}>Suna acum</a>
          </div>
          <div className="serviceCards">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="serviceItem">
                <div className="serviceImageWrap">
                  <Image src={service.image} alt={service.title} fill className="heroImage" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/servicii">Vezi detalii</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section aboutHighlight">
        <div className="container aboutGrid">
          <div>
            <h2>Despre noi</h2>
            <p className="aboutLead">
              PROENERG AUTO este partenerul tau de incredere pentru servicii auto, cu focus pe calitate,
              transparenta si satisfactia clientului. Tehnicienii nostri folosesc un proces clar si echipamente
              moderne pentru rezultate excelente la fiecare interventie.
            </p>
            <Link className="secondaryBlueBtn" href="/despre">Afla mai multe</Link>
          </div>
          <div className="aboutImageWrap">
            <Image
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80"
              alt="Mecanic verificand masina"
              fill
              className="heroImage"
            />
          </div>
        </div>
      </section>

      <section className="section miniContactBand">
        <div className="container miniContactGrid">
          <div>
            <h2>Oferim si servicii excelente de asistenta auto si programari rapide</h2>
            <p>
              Trimite detaliile problemei, iar echipa noastra te contacteaza rapid pentru estimare si
              programare.
            </p>
          </div>
          <form className="miniForm">
            <input type="text" placeholder="Nume complet" />
            <input type="email" placeholder="Adresa de email" />
            <input type="text" placeholder="Model masina (optional)" />
            <a className="primaryBtn" href={`tel:${company.phone}`}>
              Solicita oferta
            </a>
          </form>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="container">
          <SectionTitle
            eyebrow="Recenzii reale"
            title="Ce spun clientii despre PROENERG AUTO"
            description="Ne concentram pe rezultate clare, termene respectate si comunicare transparenta."
          />
          <div className="testimonialGrid">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Noutati"
            title="Sfaturi utile din blog"
            description="Recomandari simple pentru mentenanta corecta si siguranta in trafic."
          />
          <div className="blogRow">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="blogCard">
                <div className="blogThumb">
                  <Image
                    src={services[index % services.length]?.image || services[0].image}
                    alt={post.title}
                    fill
                    className="heroImage"
                  />
                </div>
                <div>
                  <p className="meta">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href="/blog" className="blogLink">Citeste articol</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
