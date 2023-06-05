import React, { useEffect, useRef } from 'react';
import './ReverseBrand.css';

const ReverseBrand = () => {
  const brands = [
    { image: 'https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg', rewards: 'Earn 4%' },
    { image: 'https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.png', rewards: 'Earn 10%' },
    { image: 'https://www.pngmart.com/files/22/KFC-Logo-PNG-Image.png', rewards: 'Earn 8%' },
    { image: 'https://w7.pngwing.com/pngs/734/115/png-transparent-pantaloons-fashion-retail-pt-new-delhi-saket-brand-clothing-fashion-retail-text-logo-india.png', rewards: 'Earn 12%' },
    { image: 'https://seeklogo.com/images/C/cult-fit-logo-9020239928-seeklogo.com.png', rewards: 'Earn 13%' },
    { image: 'https://yourchennai.com/wp-content/uploads/2020/05/MakeMyTrip-Logo-3.jpg', rewards: 'Earn 6%' },
    { image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/1200x630wa_1-sixteen_nine.png', rewards: 'Earn 20%' },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft -= 2;
        if (carouselRef.current.scrollLeft <= 0) {
          carouselRef.current.scrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel reverse" ref={carouselRef}>
      {brands.map((brand, index) => (
        <div className="card" key={index}>
          <img src={brand.image} alt="brand" />
          <div className="rewards">{brand.rewards}</div>
        </div>
      ))}
    </div>
  );
}

export default ReverseBrand;
