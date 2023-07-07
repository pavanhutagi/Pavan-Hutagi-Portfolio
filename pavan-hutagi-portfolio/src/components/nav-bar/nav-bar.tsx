import { Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <div className="w-full h-20 bg-gray-500 fixed">
        <Container className="h-full flex flex-row  text-white text-xl align-middle">
          <div className="m-auto flex-1"> Pavan Hutagi </div>
          <div className="m-auto flex justify-center w-40"> Home </div>
          <div className="m-auto flex justify-center w-40"> About </div>
          <div className="m-auto flex justify-center w-40"> Contact </div>
        </Container>
      </div>
    </>
  );
}
