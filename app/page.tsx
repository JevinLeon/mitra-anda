import About from "@/components/About";
import Features from "@/components/Features";
import GetApp from "@/components/Products";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Guide /> */}
      <Features />
      <GetApp />
    </>
  );
}
