import React, { useState, useEffect } from 'react';
import '../index.css';
import i1 from '../assets/i1.webp'
import i2 from '../assets/i2.webp'

import i3 from '../assets/i3.webp'
import i4 from '../assets/i4.webp'
import i5 from '../assets/i5.webp'
import i6 from '../assets/i6.webp'
import i7 from '../assets/i7.webp'
import i8 from '../assets/i8.webp'
import i9 from '../assets/i9.webp'
import i10 from '../assets/i10.webp'
import i11 from '../assets/i11.webp'
import i12 from '../assets/i12.webp'
import i13 from '../assets/i13.webp'
import i15 from '../assets/i15.webp'
import i16 from '../assets/i16.webp'
import i17 from '../assets/i17.webp'
import i18 from '../assets/i18.webp'
import i19 from '../assets/i19.webp'
import i20 from '../assets/i20.webp'

const images = [
 i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i15,i16,i17,i18,i19,i20
];

const Header1=()=> {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="md:flex  overflow-auto photo items-center flex ">
        <img className='image w-[full] h-[50vh]  md:h-[80vh] md:w-[60%] md:translate-x-[-270px] md:secondary opacity-60 hidden md:block' src={images[currentImageIndex-1]} alt="" />
        <img className='image w-full h-[50vh] md:h-[80vh] md:w-[60%] main md:translate-x-[-250px]' src={images[currentImageIndex]} alt="" />
      <img className='image w-[full] h-[50vh]  md:h-[80vh] md:w-[60%] md:translate-x-[-230px] md:secondary opacity-60 md:block hidden' src={images[currentImageIndex+1]} alt="" />
    </div>
  );
}

export default Header1;
