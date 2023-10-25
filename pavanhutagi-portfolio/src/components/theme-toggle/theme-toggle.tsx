import "./style.css";
import Image from "next/image";

export default function ThemeToggle() {
  return (
    <>
      <div className="theme-toggle-container">
        <div className="light-mode">
          <Image
            src="/images/light-mode.png"
            width={50}
            height={50}
            alt="Instagram"
          />
        </div>
      </div>
    </>
  );
}
