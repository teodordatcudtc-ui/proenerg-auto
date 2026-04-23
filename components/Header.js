"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Acasa" },
  { href: "/despre", label: "Despre noi" },
  { href: "/servicii", label: "Servicii" },
  { href: "/blog", label: "Blog" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          type="button"
          className="mobileMenuToggle"
          aria-label="Deschide meniul"
          onClick={() => setIsOpen((value) => !value)}
        >
          ☰
        </button>
      </div>
      {isOpen ? (
        <div className="container mobileNav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="mobileNavLink" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mobileNavCta" onClick={() => setIsOpen(false)}>
            Solicita oferta
          </Link>
        </div>
      ) : null}
    </header>
  );
}
