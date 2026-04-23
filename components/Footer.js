import { company } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <h4>Program de lucru</h4>
          <p>Luni - Vineri: 08:00 - 18:00</p>
          <p>Sambata: 09:00 - 14:00</p>
          <p>Duminica: Inchis</p>
        </div>
        <div>
          <h4>Companie</h4>
          <p>Despre noi</p>
          <p>Servicii</p>
          <p>Blog</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{company.phone}</p>
          <p>{company.email}</p>
          <p>{company.address}</p>
        </div>
        <div>
          <h4>Zona de acoperire</h4>
          <p>Bucuresti</p>
          <p>Ilfov</p>
          <p>Ploiesti</p>
        </div>
      </div>
      <div className="container footerBottom">
        <p>Copyright {new Date().getFullYear()} {company.name}. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}
