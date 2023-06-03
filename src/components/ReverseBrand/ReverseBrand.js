import React, { useEffect, useRef } from 'react';
import './ReverseBrand.css';

const ReverseBrand = () => {
  const brands = [
    { image: 'https://blog.myntra.com/wp-content/themes/myntra/assets/img/Myntra-logo-horizontal.png', rewards: 'Earn 8%' },
    { image: 'https://static.businessworld.in/article/article_extra_large_image/1609147522_O1aw88_BMS.jpg', rewards: 'Earn 10%' },
    { image: 'https://entrackr.com/storage/2022/02/Swiggy-img.jpg', rewards: 'Earn 7%' },
    { image: 'https://www.socialsamosa.com/wp-content/uploads/2012/11/Reliance-Trends1.jpg', rewards: 'Earn 12%' },
    { image: 'https://seeklogo.com/images/C/cult-fit-logo-9020239928-seeklogo.com.png', rewards: 'Earn 13%' },
    { image: 'https://eu.leafletscdns.com/in/data/4/logo.png', rewards: 'Earn 6%' },
    { image: 'https://www-us2.api.concursolutions.com/appcenter/api/v3/listings/57fd5e96140411120087e9dd/images/584b3ee7b490ec6ac904e93d?v=1481326311944&lang=en-us', rewards: 'Earn 5%' }
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
