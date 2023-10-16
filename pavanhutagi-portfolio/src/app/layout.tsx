import "./globals.css";
import "./style.css";

import ThemeToggle from "@/components/theme-toggle/theme-toggle";
import Social from "@/components/social/social";
import Navigation from "@/components/navigation/navigation";

import { Oxanium } from "next/font/google";

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
      <body className={`${oxanium.className} root-background`}>
        <main className="root-container">
          <section className="content">{children}</section>
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
      </body>
    </html>
  );
}
