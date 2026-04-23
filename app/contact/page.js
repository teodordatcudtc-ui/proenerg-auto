import SectionTitle from "@/components/SectionTitle";
import { company } from "@/data/siteData";

export const metadata = {
  title: "Contact | PROENERG AUTO",
  description: "Contacteaza echipa PROENERG AUTO pentru programari si oferte personalizate."
};

export default function ContactPage() {
  return (
    <section className="section topSection">
      <div className="container contactGrid">
        <div>
          <SectionTitle
            eyebrow="Contact direct"
            title="Programeaza interventia in service"
            description="Completeaza formularul, iar noi revenim telefonic pentru confirmare."
          />
          <div className="contactInfo">
            <p><strong>Telefon:</strong> {company.phone}</p>
            <p><strong>Email:</strong> {company.email}</p>
            <p><strong>Adresa:</strong> {company.address}</p>
            <p><strong>Program:</strong> {company.schedule}</p>
          </div>
        </div>

        <form className="contactForm">
          <label htmlFor="name">Nume complet</label>
          <input id="name" name="name" type="text" placeholder="Ex: Andrei Popa" required />

          <label htmlFor="phone">Telefon</label>
          <input id="phone" name="phone" type="tel" placeholder="Ex: 07xx xxx xxx" required />

          <label htmlFor="service">Serviciu dorit</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Selecteaza serviciul
            </option>
            <option value="diagnoza">Diagnoza computerizata</option>
            <option value="mecanica">Mecanica generala</option>
            <option value="electric">Electric/electronica</option>
            <option value="frane">Frane si directie</option>
          </select>

          <label htmlFor="message">Detalii problema</label>
          <textarea id="message" name="message" rows="5" placeholder="Descrie pe scurt problema masinii" />

          <button className="primaryBtn" type="submit">
            Trimite solicitarea
          </button>
        </form>
      </div>
    </section>
  );
}
