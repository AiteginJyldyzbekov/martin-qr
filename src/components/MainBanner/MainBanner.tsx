import React, { useState, useEffect } from 'react';
import scss from './MainBanner.module.scss';

const backgroundImages = [
  { url: "https://kartinki.pics/uploads/posts/2022-12/thumbs/1669931130_56-kartinkin-net-p-belii-fon-oboi-vkontakte-60.jpg" },
  { url: "https://img.freepik.com/free-photo/brown-gradient-background_53876-104923.jpg" },
  { url: "https://kartinki.pics/uploads/posts/2022-12/1670057221_1-kartinkin-net-p-prosto-rozovii-fon-oboi-1.png" }
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
      className={`${scss.banner_w} container animate__animated animate__backInDown`}
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
