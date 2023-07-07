import { Container } from "react-bootstrap";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="w-full h-20 bg-gray-900 fixed drop-shadow">
        <Container className="h-full flex flex-row  text-white text-xl align-middle">
          <div className="m-auto flex-1">
            <Link href="/">Pavan Hutagi</Link>
          </div>
          <div className="m-auto flex justify-center w-40">
            <Link href="/home">Home</Link>
          </div>
          <div className="m-auto flex justify-center w-40">
            <Link href="/about">About</Link>
          </div>
          <div className="m-auto flex justify-center w-40">
            <Link href="/contact">Contact</Link>
          </div>
        </Container>
      </div>
    </>
  );
}
