import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className="w-full h-32 bg-gray-500">
        <Container className="h-full flex flex-row  text-white text-xl align-middle">
          <div className="m-auto flex justify-center">
            <Link href="/">Pavan Hutagi</Link>
          </div>
        </Container>
      </div>
    </>
  );
}
