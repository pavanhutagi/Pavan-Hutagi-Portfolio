import "./globals.css";
import "./style.css";

import ThemeToggle from "@/components/theme-toggle/theme-toggle";
import Social from "@/components/social/social";
import Navigation from "@/components/navigation/navigation";
import MobileMenu from "@/components/mobile-menu/mobile-menu";

import Image from "next/image";

import { Oxanium } from "next/font/google";
import LineParticles from "@/components/line-particles/line-particles";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Pavan Hutagi",
  description: "Portfolio of Pavan Hutagi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oxanium.className}`}>
        <div className="particles-container">
          <LineParticles />
        </div>

        <div className="root-background">
          <main className="root-container">
            <section className="mobile-menu">
              <MobileMenu />
            </section>

            <section className="content">
              <div className="page-container">{children}</div>
            </section>

            <section className="side-bar">
              <div className="side-bar-container">
                <div className="theme-toggle">
                  <ThemeToggle />
                </div>

                <div className="nav">
                  <Navigation />
                </div>

                <div className="social">
                  <Social />
                </div>
              </div>
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
