import { About, Contact, Hero, Navbar, Experience, Testimonials, Footer } from "@/components";
import dynamic from "next/dynamic";

export default function Home() {
  const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"));

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="bg-primary relative z-[1] h-full">
        <div className="relative z-[2]">
          <About />
          <div className="overflow-hidden">
            <Experience />
          </div>
          <Testimonials />
          <Contact />
        </div>
        <Footer className="relative z-[3]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[0] pointer-events-none">
        <StarsCanvas />
      </div>
    </div>
  );
}