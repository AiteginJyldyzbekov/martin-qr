import React, { useState, useEffect } from 'react';
import scss from './MainBanner.module.scss';
import { useNavigate } from 'react-router-dom';
import Preloader from 'shared/ui/Preloader/Preloader';

const MainBanner = ({ ads, isLoading }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % ads.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [ads]);

  const currentImage = ads[currentImageIndex]?.images[0]?.url;
  const currentTitle = ads[currentImageIndex]?.name;
  const currentDesc = ads[currentImageIndex]?.desc;
  const key = ads[currentImageIndex]?.url;

  if (isLoading) return <Preloader />

  return (
    <div
      className={`${scss.banner_w} container animate__animated`}
      style={{ backgroundImage: `url(${currentImage})` }}
      key={key}
    >
      <div className={scss.banner_block}>
        <div className={scss.banner_b_top}>
          <h1>{currentTitle}</h1>
          <p>{currentDesc}</p>
        </div>
        <div className={scss.banner_b_bottom}>
          <button onClick={() => navigate("catalog/blazer")}>Смотреть</button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;