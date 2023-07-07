import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="w-full h-96 bg-gray-900"></section>
      <section className="w-full h-96 bg-gray-700"></section>
      <section className="w-full h-96 bg-gray-300"></section>
      <section className="w-full h-96 bg-gray-600"></section>
      <Footer />
    </>
  );
}
