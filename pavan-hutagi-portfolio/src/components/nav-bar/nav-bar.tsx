import { Container } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const currentRoute = usePathname();
  const activeStyle =
    "hover:text-portfolioHighlight text-portfolioHighlight text-base";
  const nonActiveStyle = "hover:text-portfolioHighlight text-white text-base";

  return (
    <>
      <div className="w-full h-20 bg-portfolioPrimary fixed drop-shadow">
        <Container className="h-full flex flex-row text-white text-xl align-middle">
          <Link href="/" className="m-auto">
            <Image src="/images/Avatar.png" alt="" width={50} height={50} />
          </Link>

          <div className="m-auto flex-1">
            <Link href="/" className="hover:text-portfolioHighlight text-base">
              <span className="ml-2"> PAVAN HUTAGI </span>
            </Link>
          </div>

          <div className="m-auto flex w-48">
            <Link
              href="/home"
              className={
                currentRoute == "/home" || currentRoute == "/"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              HOME
            </Link>
          </div>

          <div className="m-auto flex w-48">
            <Link
              href="/about"
              className={
                currentRoute == "/about" ? activeStyle : nonActiveStyle
              }
            >
              ABOUT
            </Link>
          </div>

          <div className="m-auto flex w-48 ">
            <Link
              href="/contact"
              className={
                currentRoute == "/contact" ? activeStyle : nonActiveStyle
              }
            >
              CONTACT
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
