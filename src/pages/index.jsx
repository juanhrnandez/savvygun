import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageDescription from "@/components/ImageDescription";
import MobileNavbar from "@/components/MobileNavbar";
import PasosCover from "@/components/PasosCover";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";

export default function Home() {
  return (
    <>
      <MobileNavbar />
      <main className="overflow-hidden dark:bg-negro dark:text-white ">
        <Hero />
        <ImageDescription />
        <PrimaryFeatures />
        <PasosCover /> 
        <Cta />
        <Features/>
        <Footer />
      </main>
    </>
  );
}
