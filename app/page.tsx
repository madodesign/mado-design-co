import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Offer } from "@/components/sections/Offer";
import { Fit } from "@/components/sections/Fit";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Offer />
        <Fit />
        <Work />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
