import Image from "next/image";

export default function Social() {
  return (
    <>
      <div className="instagram">
        <a href="https://www.instagram.com/pavan_hutagi/" target="_blank">
          <Image
            src="/images/instagram.png"
            width={50}
            height={50}
            alt="Instagram"
            style={{ marginRight: "20px" }}
          />
        </a>
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/pavan-hutagi/" target="_blank">
          <Image
            src="/images/linkedin.png"
            width={50}
            height={50}
            alt="LinkedIn"
            style={{ marginRight: "20px" }}
          />
        </a>
      </div>
      <div className="github">
        <a href="https://www.github.com/pavanhutagi" target="_blank">
          <Image src="/images/github.png" width={50} height={50} alt="GitHub" />
        </a>
      </div>
    </>
  );
}
