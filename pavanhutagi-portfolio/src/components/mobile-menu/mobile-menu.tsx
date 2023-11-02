"use client";

import "./style.css";
import Image from "next/image";

export default function MobilMenu() {
  const openNav = () => {
    console.log("Menu Clicked!");
  };

  return (
    <>
      <div className="mobile-menu-container">
        <div className="logo">
          <Image
            src="/images/avatar.png"
            width={50}
            height={50}
            alt="LinkedIn"
          />
        </div>

        <div className="menu-icon" onClick={openNav}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
      </div>
    </>
  );
}
