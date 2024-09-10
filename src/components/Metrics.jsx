'use client'
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';  // Import hook for media queries
import { textVariant } from "../utils/motion";

import { metrics } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const MetricsCard = ({ index, title, description, highlight, highlightColor, icon }) => {
  // Helper function to clean the word and match it properly
  const cleanWord = (word) => word.replace(/[.,]/g, '').toLowerCase();

  // Detect if the screen size is mobile
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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
          {!isMobile && (
            <Image
              src={icon}
              alt={title}
              className='w-[48px] h-[48px] object-contain' // Smaller icon size
            />
          )}

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

          {/* Display image at the bottom if on mobile */}
          {isMobile && (
            <Image
              src={icon}
              alt={title}
              className='w-[48px] h-[48px] object-contain mt-4' // Smaller icon size for mobile
            />
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Metrics = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className='mt-20 flex flex-wrap justify-center gap-10'>
          {metrics.map((metric, index) => (
            <MetricsCard key={metric.title} index={index} {...metric} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Metrics, "metrics");