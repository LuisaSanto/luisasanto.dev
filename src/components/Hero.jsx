'use client'
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      x: "-500px",
      scrollTrigger: {
        trigger: slider.current,
        scrub: true,
        start: "top top", 
        end: "bottom top",
        onUpdate: (self) => {
          gsap.set([firstText.current, secondText.current], {
            xPercent: self.progress * -100, 
          });
        },
      },
    });
  }, []);

  return (
    <section className={`relative z-[-1] w-full h-screen mx-auto banner overflow-visible`}>
      <div
        className={`absolute inset-0 top-[150px] right-40 z-[1] animation max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div data-scroll data-scroll-speed='0.4'>
          <h1 className={`font-black lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 text-white`}>
            Hi, I'm <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[60px] lg:text-[110px]'>Luisa Santo</p>
          </h1>
        </div>
      </div>

      <div className="sliderContainer md:z-[1]">
        <div ref={slider} className="slider overflow-visible text-secondary text-[70px] lg:text-[200px]">
          <p ref={firstText}>Software Developer.</p>
          <p ref={secondText}>Software Developer.</p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30 cursor-pointer'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;