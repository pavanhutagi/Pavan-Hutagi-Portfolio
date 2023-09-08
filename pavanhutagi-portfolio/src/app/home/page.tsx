"use client";

import particlesConfigJson from "@/configs/particles-config.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import Typewriter from "typewriter-effect";

import "./style.css";

export default function Home() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  let particlesConfig = JSON.parse(JSON.stringify(particlesConfigJson));

  return (
    <>
      <Particles
        id="tsparticles1"
        init={particlesInit}
        options={particlesConfig}
        className="particles"
      />

      <div className="overlay">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Portfolio in the making.").start();
          }}
        />
      </div>
    </>
  );
}
