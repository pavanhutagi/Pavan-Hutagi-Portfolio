"use client";

import "./style.css";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import particles1ConfigJson from "@/json/particles1-config.json";

export default function LineParticles() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
    await loadPolygonMaskPlugin(main);
  };

  let particlesConfig1 = JSON.parse(JSON.stringify(particles1ConfigJson));

  return (
    <>
      <Particles
        id="tsparticles1"
        init={particlesInit}
        options={particlesConfig1}
        className="w-full h-screen"
      />
    </>
  );
}
