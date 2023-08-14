"use client";

import particles1ConfigJson from "@/configs/particles1-config.json";
import particles2ConfigJson from "@/configs/particles2-config.json";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

export default function Home() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
    await loadPolygonMaskPlugin(main);
  };

  let particlesConfig1 = JSON.parse(JSON.stringify(particles1ConfigJson));
  let particlesConfig2 = JSON.parse(JSON.stringify(particles2ConfigJson));

  return (
    <>
      <NavBar />

      <section>
        <Particles
          id="tsparticles1"
          init={particlesInit}
          options={particlesConfig1}
          className="w-full h-screen"
        />
      </section>

      <section
        style={{ height: "1000px" }}
        className="w-full h-96 bg-portfolioSecondary"
      ></section>

      <section>
        <Particles
          id="tsparticles2"
          init={particlesInit}
          options={particlesConfig2}
          className="w-full h-screen"
        />
      </section>

      <section
        style={{ height: "1000px" }}
        className="w-full h-96 bg-portfolioSecondary"
      ></section>

      <Footer />
    </>
  );
}
