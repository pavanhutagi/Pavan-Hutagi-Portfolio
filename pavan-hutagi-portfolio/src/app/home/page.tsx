"use client";

import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import particlesConfigJson from "@/configs/particlesjs-config.json";

export default function Home() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const particlesConfig = JSON.parse(JSON.stringify(particlesConfigJson));

  return (
    <>
      <NavBar />

      <section>
        <div>Hi, I&apos;m Pavan Hutagi</div>
        <div>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
            className="w-full h-screen bg-portfolioBackground"
          />
        </div>
      </section>

      <section
        style={{ height: "1000px" }}
        className="w-full h-96 bg-portfolioSecondary"
      ></section>

      <section
        style={{ height: "1000px" }}
        className="w-full h-96 bg-portfolioBackground"
      ></section>

      <section
        style={{ height: "1000px" }}
        className="w-full h-96 bg-portfolioSecondary"
      ></section>

      <Footer />
    </>
  );
}
