import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Rules } from "@/components/Rules";
import { Donate } from "@/components/Donate";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Rules />
      <Donate />
      <Footer />
    </>
  );
}