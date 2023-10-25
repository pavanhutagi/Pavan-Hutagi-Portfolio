"use client";

import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <div className="nav-container">
        <div
          className={`nav-item ${
            pathname === "/" || pathname === "/home" ? "nav-active" : ""
          }`}
        >
          <Link href="/home">home</Link>
        </div>
        <div
          className={`nav-item ${pathname === "/about" ? "nav-active" : ""}`}
        >
          <Link href="/about">about</Link>
        </div>
        <div
          className={`nav-item ${pathname === "/contact" ? "nav-active" : ""}`}
        >
          <Link href="/contact">contact</Link>
        </div>
      </div>
    </>
  );
}
