import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="ctaBanner">
      <div className="container ctaBannerWrap">
        <div>
          <h2>Pregatit pentru servicii auto de calitate pentru masina ta?</h2>
          <p>Programeaza o verificare rapida, iar echipa PROENERG AUTO revine cu varianta potrivita.</p>
        </div>
        <Link className="primaryBtn" href="/contact">
          Contacteaza-ne
        </Link>
      </div>
    </section>
  );
}
