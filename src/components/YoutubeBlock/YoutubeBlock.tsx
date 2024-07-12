import { useState, useEffect } from 'react';
import scss from "./YoutubeBlock.module.scss";
import 'animate.css';

function YoutubeBlock() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('youtubeBlock');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (!hasAnimated && elementTop < window.innerHeight && elementBottom >= 0) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверяем видимость при загрузке компонента

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div
      id="youtubeBlock"
      className={`${scss.y_back_w} ${hasAnimated ? 'animate__animated animate__backInRight' : ''}`}
      style={{ animationDuration: '2s' }}
    >
      <div className={`${scss.y_g_w} container`}>
        <div>
          <iframe
            width="100%"
            height="328"
            src="https://www.youtube.com/embed/fnI_JEM7BSM"
            title="Компания AGO INSTYLE"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
          ></iframe>
        </div>
        <p>
          Компания AGO In Style специализируется на производстве женской верхней
          одежды и брючных костюмов, совмещая эстетичный внешний вид и
          долговечность моделей. Мы стремимся к совершенству, используя новейшее
          оборудование, тщательно подбирая лучших поставщиков тканей и
          фурнитуры, и постоянно совершенствуя внутренние процессы. Наши изделия
          отличаются высоким качеством благодаря вниманию к каждой детали и
          применению инновационных технологий. AGO In Style – это гарантия
          стиля, комфорта и надежности в каждой модели.
        </p>
      </div>
    </div>
  );
}

export default YoutubeBlock;
