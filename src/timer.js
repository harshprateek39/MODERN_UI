import React, { useState, useEffect } from 'react';
import {motion , AnimatePresence } from "framer-motion"

const CountdownTimer = ({ targetDate  ,color}) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]);

  return (
    <div className=' text-white flex gap-4 pt-5 z-10 ,  ' style={{ transition:"color 0.3s ease"}}>
      <div className=' flex flex-col items-center z-10 '>
      <p className=' text-3xl font-bold'>{timeRemaining.days}</p>
      <p className=' text-[8px] font-medium  ' style={{color}}>DAYS</p>
      </div>
      <div className=' flex flex-col items-center z-10 '>
      <p className=' text-3xl font-bold'>{timeRemaining.hours}</p>
      <p className=' text-[8px] font-medium  ' style={{color}}>HOUR</p>
      </div>
      <div className=' flex flex-col items-center z-10 '>
      <p className=' text-3xl font-bold'>{timeRemaining.minutes}</p>
      <p className=' text-[8px] font-medium  ' style={{color}}>MINUTE</p>
      </div>
      <div className=' flex flex-col items-center z-10 '>
     <AnimatePresence mode='wait'> <motion.p key={timeRemaining.seconds} exit={{ y:10, opacity:0}} transition={{ duration:0.1}} className=' text-3xl font-bold'>{timeRemaining.seconds}</motion.p></AnimatePresence>
      <p className=' text-[8px] font-medium  ' style={{color}}>SECOND</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
