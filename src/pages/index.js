import Hero from "@/components/Hero";
import MobileNavbar from "@/components/MobileNavbar";

export default function Home() {
  return (
    <>
      <MobileNavbar />
      <main className="bg-gris">
        <Hero />
      </main>
    </>
  );
}
