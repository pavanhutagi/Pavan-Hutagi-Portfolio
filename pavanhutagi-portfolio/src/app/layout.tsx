import "./globals.css";

import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
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
      <body className={`${inter.className} root-background`}>
        <main className="root-container">
          <section className="content">{children}</section>

          <section className="side-bar">
            <div className="side-bar-container">
              <div className="theme-toggle">
                <div className="light-mode">
                  <Image
                    src="/images/light-mode.png"
                    width={50}
                    height={50}
                    alt="Instagram"
                  />
                </div>
              </div>

              <div className="nav"></div>

              <div className="social">
                <div className="instagram">
                  <a
                    href="https://www.instagram.com/pavan_hutagi/"
                    target="_blank"
                  >
                    <Image
                      src="/images/instagram.png"
                      width={50}
                      height={50}
                      alt="Instagram"
                      style={{ marginRight: "20px" }}
                    />
                  </a>
                </div>

                <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/pavan-hutagi/"
                    target="_blank"
                  >
                    <Image
                      src="/images/linkedin.png"
                      width={50}
                      height={50}
                      alt="LinkedIn"
                      style={{ marginRight: "20px" }}
                    />
                  </a>
                </div>

                <div className="github">
                  <a href="https://www.github.com/pavanhutagi" target="_blank">
                    <Image
                      src="/images/github.png"
                      width={50}
                      height={50}
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
