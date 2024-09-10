'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { testimonials } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import color_sharp from "../assets/color_sharp.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const TestimonialCard = ({
  name,
  feedback,
  company,
  position,
  image,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false); // Expand/collapse state

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detect mobile devices (iPhone, iPad, Android)
    if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
      setIsMobile(true);
    }
  }, []);

  const handleCardClick = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  const cardContent = (
    <motion.div
      className={`testimonial-card p-[1px] green-pink-gradient rounded-[20px] shadow-card transition-all duration-500 ease-in-out relative`}
      style={{
        maxWidth: '400px',
        height: expanded ? 'auto' : '270px', // Adjust height based on expanded state
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={handleCardClick} // Add click handler
    >
      <div className='bg-tertiary rounded-[20px] p-5'>
        <div className="flex flex-col items-center justify-center">
          <img
            src={image}
            alt={`${name}'s picture`}
            className="w-16 h-16 rounded-full object-cover mb-4"
          />
          <h3 className="text-white font-bold text-[20px] mb-2">{name}</h3>
          <p className="text-gray-400 text-sm mb-2">{position} at {company}</p>
        </div>

        <div className={`testimonial-feedback ${expanded ? 'expanded' : 'collapsed'}`}>
          <p className="text-gray-300 text-[14px] font-semibold mb-2">
            {feedback}
          </p>
        </div>
      </div>

      {/* Styles for smooth transitions */}
      <style jsx>{`
        .testimonial-card {
          transition: height 0.6s ease-in-out;
        }

        .testimonial-feedback {
          overflow: hidden;
          max-height: ${expanded ? '1000px' : '4.5em'};
          transition: max-height 0.6s ease-in-out;
          display: -webkit-box;
          -webkit-line-clamp: ${expanded ? 'none' : '3'};
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }

        .testimonial-feedback.expanded {
          max-height: 1000px;
          transition: max-height 0.6s ease-in-out;
        }

        .testimonial-feedback.collapsed {
          max-height: 4.5em;
          transition: max-height 0.6s ease-in-out;
        }

        .testimonial-card:hover {
          transition: height 0.6s ease-in-out;
        }
      `}</style>
    </motion.div>
  );

  return isMobile ? (
    cardContent // On mobile, just render the card without Tilt
  ) : (
    <Tilt
      className="xs:w-[250px] w-full"
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
      {cardContent}
    </Tilt>
  );
};

const Testimonials = () => {
  return (
    <>
      <div className='relative'>
        <motion.div variants={textVariant()}>
          <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Testimonials</p>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>What People Say.</h2>
        </motion.div>
        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" style={{ filter: "brightness(0.7) sepia(1) saturate(6) hue-rotate(180deg)" }} />
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`testimonial-${index}`} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Testimonials, "testimonials");