'use client'
import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "./hoc";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import user from "../assets/user.png";

const About = () => {
  return (
    <>
      <div className='relative overflow-hidden lg:overflow-visible'>
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>My Journey</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
          With experience in backend development and expertise in iOS apps, I’ve worked on optimizing performance, improving code quality, and tackling complex technical challenges across different platforms. I’m passionate about building solutions that enhance system reliability and deliver seamless user experiences.
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
          I love pushing the boundaries in software development, whether by building new features or making existing ones better. My goal is always to deliver high-quality, efficient solutions that make an impact.
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
          Mentoring has also played a big role in my career. I’ve had the chance to guide engineers transitioning into new roles while continuing to grow myself. This balance of learning and teaching keeps me motivated to take on new challenges and improve both as an individual and as part of a team.
        </motion.p>

        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" style={{ filter: "brightness(0.7) sepia(1) saturate(6) hue-rotate(180deg)" }} />
        <div className='absolute z-[-1] w-screen -top-20'>
          <Image 
              loading="lazy" 
              src={user} 
              alt="hero" 
              className="z-[-2] absolute z-[-1] w-screen -top-20 animation hidden md:block"
              height={700} 
              style={{ objectFit: 'contain' }} 
            />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");