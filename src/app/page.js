import { About, Metrics, Contact, Hero, Navbar, Experience, Testimonials, Footer } from "@/components";
import dynamic from "next/dynamic";

export default function Home() {
  const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"));
  return (
    <div className="  ">
      <Navbar />
      <Hero />
      <div className="bg-primary relative z-[1] h-full ">
        <div className=" relative z-[1]">
          <About />
          <Metrics />
          <div className=" overflow-hidden">
            <Experience />
          </div>
          <Testimonials />
          <Contact />
        </div>
        <StarsCanvas />
      </div>
      <div className=" relative z-[2]">
      <Footer />
      </div>
    </div>
  );
}