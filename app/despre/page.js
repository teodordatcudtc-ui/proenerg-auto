import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Despre noi | PROENERG AUTO",
  description: "Cine suntem si cum lucram pentru a livra servicii auto predictibile si sigure."
};

const values = [
  "Transparenta completa la costuri si durate",
  "Diagnoza precisa inainte de orice interventie",
  "Piese si consumabile de calitate verificata",
  "Comunicare constanta pe toata durata lucrarii"
];

export default function DesprePage() {
  return (
    <>
      <section className="section topSection">
        <div className="container aboutGrid">
          <div>
            <SectionTitle
              eyebrow="Despre PROENERG AUTO"
              title="Peste doua decenii de experienta in service auto"
              description="Am construit un proces de lucru stabil, orientat spre eficienta si rezultate pe termen lung."
            />
            <p>
              Echipa noastra combina experienta practica si tehnologie moderna pentru a rezolva rapid atat
              problemele uzuale, cat si defectiunile complexe. Fiecare masina intra intr-un flux clar de
              evaluare, executie si control final.
            </p>
            <ul className="valueList">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
          <div className="aboutImageWrap">
            <Image
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80"
              alt="Tehnician auto in atelier"
              fill
              className="heroImage"
            />
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
