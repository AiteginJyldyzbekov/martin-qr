import React, { useState, useEffect } from 'react';
import scss from './MainBanner.module.scss';

const backgroundImages = [
{
    url: "https://media.licdn.com/dms/image/D4D12AQGPCed4zlkFCA/article-cover_image-shrink_720_1280/0/1678631732312?e=2147483647&v=beta&t=XHMwdbaB1omlDGgJI-QMewqeFmDmYpDEk4AcC1-mu8c",
    title: "Title 1",
    desc: "Desc"
  },
  {
    url: "https://cache.cosmopolitan.fr/data/photo/w1000_ci/6d/fashion-week-infos.jpg",
    title: "Title 2",
    desc: "Desc2"
  },
  {
    url: "https://footwearnews.com/wp-content/uploads/2022/07/GettyImages-1407379141.jpg?w=700&h=437&crop=1",
    title: "Title 3",
    desc: "Desc3"
  }
];

function MainBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Меняем изображение каждые 3 секунды

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, []);

  const currentImage = backgroundImages[currentImageIndex]?.url;
  const currentTitle = backgroundImages[currentImageIndex]?.title
  const currentDesc = backgroundImages[currentImageIndex]?.desc
  // console.log(currentImage);

  // Проверка на наличие текущего изображения и его url
  if (!currentImage || !currentImage) {
    console.error("Текущее изображение не определено или не содержит URL");
    return null; // Или отобразите резервный UI
  }

  return (
    <div
      className={`${scss.banner_w} container animate__animated animate__backInDown`}
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className={scss.banner_block}>
        <div className={scss.banner_b_top}>
          <h1>{currentTitle}</h1>
          <p>{currentDesc}</p>
        </div>
        <div className={scss.banner_b_bottom}>
          <button>Смотреть</button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
