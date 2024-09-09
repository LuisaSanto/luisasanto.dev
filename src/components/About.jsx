'use client'
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { metrics } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import astronaut from "../assets/header.svg";

const MetricsCard = ({ index, title, description, highlight, highlightColor, icon }) => {
  // Helper function to clean the word and match it properly
  const cleanWord = (word) => word.replace(/[.,]/g, '').toLowerCase();

  return (
    <Tilt 
      className='xs:w-[250px] w-full'
      glareEnable={true} 
      glareMaxOpacity={0.8} 
      glareColor="#ffffff" 
      glarePosition="bottom" 
      glareBorderRadius="20px"
      tiltMaxAngleX={30} 
      tiltMaxAngleY={30} 
      tiltEnable={true} 
      perspective={1000}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <Image
            src={icon}
            alt={title}
            className='w-[48px] h-[48px] object-contain' // Smaller icon size
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
          <p className='text-white text-[14px] text-center mt-2'>
            {description.split(' ').map((word, idx) => {
              const cleanedWord = cleanWord(word);
              if (cleanedWord === cleanWord(highlight)) {
                return (
                  <span key={idx} className={`font-bold ${highlightColor}`}>
                    {word}{' '}
                  </span>
                );
              } else {
                return <span key={idx}>{word}{' '}</span>;
              }
            })}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

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

        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
        <Image src={astronaut} alt="astronaut" className="absolute z-[-1] h-80 -right-20 animation top-28" />
      </div>

      <div className='mt-20 flex-wrap justify-center gap-10 hidden md:flex'>
      {metrics.map((metric, index) => (
        <MetricsCard key={metric.title} index={index} {...metric} />
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");