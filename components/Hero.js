import Image from "next/image";
import Link from "next/link";
import { stats } from "@/data/siteData";

export default function Hero() {
  return (
    <section className="hero heroTop">
      <div className="container heroGrid">
        <div className="heroText">
          <h1>Performanta maxima pentru masina ta</h1>
          <p className="heroLead">
            La PROENERG AUTO oferim servicii complete pentru mentenanta si reparatii, astfel incat masina ta
            sa functioneze in siguranta si la parametri optimi.
          </p>
          <div className="heroButtons">
            <Link href="/contact" className="primaryBtn">
              Solicita oferta
            </Link>
          </div>
          <div className="statsGrid">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="heroImageWrap">
          <Image
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
            alt="Mecanic auto in service"
            fill
            priority
            className="heroImage"
          />
        </div>
      </div>
    </section>
  );
}
