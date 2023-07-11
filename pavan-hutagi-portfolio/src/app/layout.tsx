import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { Zen_Dots } from "next/font/google";

const inter = Zen_Dots({
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
