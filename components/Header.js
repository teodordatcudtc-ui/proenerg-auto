import Link from "next/link";

const links = [
  { href: "/", label: "Acasa" },
  { href: "/despre", label: "Despre noi" },
  { href: "/servicii", label: "Servicii" },
  { href: "/blog", label: "Blog" }
];

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container navWrap">
        <Link href="/" className="brand">
          <span>PROENERG</span> AUTO
        </Link>
        <nav className="nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="navLink">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="callBtn" href="/contact">Solicita oferta</Link>
      </div>
    </header>
  );
}
