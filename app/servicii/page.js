import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/data/siteData";

export const metadata = {
  title: "Servicii | PROENERG AUTO",
  description: "Lista completa de servicii auto: mecanica, diagnoza, electric, frane, mentenanta."
};

export default function ServiciiPage() {
  return (
    <>
      <section className="section topSection">
        <div className="container">
          <SectionTitle
            eyebrow="Portofoliu servicii"
            title="Pachete complete pentru mentenanta si reparatii"
            description="Lucram dupa proces clar: diagnoza, deviz, aprobare, executie, verificare finala."
          />
          <div className="cardGrid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
