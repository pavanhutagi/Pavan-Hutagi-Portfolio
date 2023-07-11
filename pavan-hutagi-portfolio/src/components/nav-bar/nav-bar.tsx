import { Container } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const currentRoute = usePathname();
  const activeStyle = "hover:text-portfolioHighlight text-portfolioHighlight";
  const nonActiveStyle = "hover:text-portfolioHighlight text-white";

  console.log(currentRoute);

  return (
    <>
      <div className="w-full h-20 bg-portfolioPrimary fixed drop-shadow">
        <Container className="h-full flex flex-row  text-white text-xl align-middle">
          <div className="m-auto flex-1">
            <Link href="/" className="hover:text-portfolioHighlight">
              PAVAN HUTAGI
            </Link>
          </div>
          <div className="m-auto flex justify-center w-48">
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
          <div className="m-auto flex justify-center w-48">
            <Link
              href="/about"
              className={
                currentRoute == "/about" ? activeStyle : nonActiveStyle
              }
            >
              ABOUT
            </Link>
          </div>
          <div className="m-auto flex justify-center w-48">
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
