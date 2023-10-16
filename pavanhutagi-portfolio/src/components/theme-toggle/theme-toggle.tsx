import Image from "next/image";

export default function ThemeToggle() {
  return (
    <>
      <div className="light-mode">
        <Image
          src="/images/light-mode.png"
          width={50}
          height={50}
          alt="Instagram"
        />
      </div>
    </>
  );
}
