import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins, Manrope } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata = {
  title: "PROENERG AUTO | Service auto profesional",
  description: "Service auto complet pentru diagnoza, reparatii si mentenanta preventiva."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={`${poppins.variable} ${manrope.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
