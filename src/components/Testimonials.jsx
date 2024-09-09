'use client'
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { testimonials } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const TestimonialCard = ({
  name,
  feedback,
  company,
  position,
  image,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.div
      className={`testimonial-card p-[1px] green-pink-gradient rounded-[20px] shadow-card transition-all duration-500 ease-in-out relative`} // Gradient border added
      style={{
        maxWidth: '400px',
        height: expanded ? 'auto' : '270px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setExpanded(true)}  // Expand on hover
      onMouseLeave={() => setExpanded(false)} // Collapse on hover leave
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

        .testimonial-card:hover {
          transition: height 0.6s ease-in-out;
        }
      `}</style>
    </motion.div>
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