import React, { useState, useEffect } from 'react';
import scss from './MainBanner.module.scss';

const backgroundImages = [
  { url: "https://media.licdn.com/dms/image/D4D12AQGPCed4zlkFCA/article-cover_image-shrink_720_1280/0/1678631732312?e=2147483647&v=beta&t=XHMwdbaB1omlDGgJI-QMewqeFmDmYpDEk4AcC1-mu8c" },
  { url: "https://cache.cosmopolitan.fr/data/photo/w1000_ci/6d/fashion-week-infos.jpg" },
  { url: "https://footwearnews.com/wp-content/uploads/2022/07/GettyImages-1407379141.jpg?w=700&h=437&crop=1" }
];

function MainBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Меняем изображение каждые 3 секунды

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, []);

  const currentImage = backgroundImages[currentImageIndex];
  console.log(currentImage?.url);
  
  // Проверка на наличие текущего изображения и его url
  if (!currentImage || !currentImage?.url) {
    console.error("Текущее изображение не определено или не содержит URL");
    return null; // Или отобразите резервный UI
  }

  return (
    <div
      className={`${scss.banner_w} container`}
      style={{ backgroundImage: `url(${currentImage?.url})` }}
    >
      <div className={scss.banner_block}>
        <div className={scss.banner_b_top}>
          <h1>Производство женской одежды под вашим брендом</h1>
          <p>Полный комплекс услуг для СТМ: разработка коллекции одежды, разработка лекал и пошив образцов, подбор ткани, брендирование, пошив партии, отгрузка транспортными компаниями.</p>
        </div>
        <div className={scss.banner_b_bottom}>
          <button>Смотреть</button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
