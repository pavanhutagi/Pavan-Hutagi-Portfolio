import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className="w-full h-32 bg-portfolioPrimary">
        <Container className="h-full flex flex-row  text-white text-xl align-middle">
          <div className="m-auto flex justify-center">
            <Link href="/" className="hover:text-portfolioHighlight">
              PAVAN HUTAGI
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
