"use client";

import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";

export default function About() {
  return (
    <>
      <NavBar />

      <section
        style={{ height: "1000px" }}
        className="w-full bg-red-900"
      ></section>

      <section
        style={{ height: "1000px" }}
        className="w-full h-96 bg-gray-700"
      ></section>

      <section
        style={{ height: "1000px" }}
        className="w-full h-96 bg-gray-300"
      ></section>

      <section
        style={{ height: "1000px" }}
        className="w-full h-96 bg-gray-600"
      ></section>

      <Footer />
    </>
  );
}
