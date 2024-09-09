'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  const [time, setTime] = useState("");
  const [timeZone, setTimeZone] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      
      // Get the local time string
      const localTime = date.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      });

      // Get the local time zone abbreviation
      const timeZoneName = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' })
        .formatToParts(date)
        .find(part => part.type === 'timeZoneName').value;

      setTime(localTime);
      setTimeZone(timeZoneName);
    };

    updateTime(); // Set the initial time
    const interval = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <motion.footer 
      className="w-full bg-primary py-4 flex items-center justify-center"
      variants={fadeIn("", "", 0.1, 1)}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-5 space-y-4 md:space-y-0">
        <div className="text-secondary flex items-center space-x-2 text-[14px]">
          <span>Made with 🩵 by</span>
          <a 
            href="https://www.linkedin.com/in/luisa-santo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline font-semibold"
          >
            luisasanto
          </a>
        </div>

        <div className="text-secondary text-[14px]">
          Local time: <span className="text-white font-bold">{time} {timeZone}</span>
        </div>

        <div>
          <a 
            href="https://www.linkedin.com/in/luisa-santo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white border border-gray-700 hover:border-gray-500 rounded-full px-3 py-1 transition-all hover:bg-pink-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-2" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H3.127v7.225h1.816zm-1.1-8.21c.63 0 1.144-.518 1.144-1.159 0-.64-.514-1.158-1.144-1.158-.63 0-1.144.518-1.144 1.158 0 .641.514 1.159 1.144 1.159zm4.908 8.21V9.359c0-.229.017-.458.084-.622.185-.459.607-.934 1.316-.934.928 0 1.299.704 1.299 1.734v4.857h1.815V9.195c0-2.19-1.166-3.207-2.72-3.207-1.304 0-1.883.722-2.208 1.234v.028h-.015a5.667 5.667 0 0 1 .015-.028V6.169H6.944c.024.605 0 7.225 0 7.225h1.815z"/>
            </svg>
            <span>luisasanto</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;