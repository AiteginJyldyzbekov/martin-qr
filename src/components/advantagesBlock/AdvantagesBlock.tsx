import React, { useEffect, useState } from "react";
import scss from "./Advantages.module.scss";

const AdvantagesBlock: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("advantagesBlock");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (
          !hasAnimated &&
          elementTop < window.innerHeight &&
          elementBottom >= 0
        ) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on component load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div
      id="advantagesBlock"
      className={`${scss.advantage_w} container ${
        hasAnimated ? "animate__animated animate__fadeInUp" : ""
      }`}
      style={{ animationDuration: "2s" }}
    >
      <div className={scss.b_b}><p>5</p></div>
      <div className={scss.b_r}><p><span>5</span> Причин с нами работать</p></div>
      <div className={scss.b_t}>
        <p className={scss.title}>Уникальные разработки.</p>
        <p className={scss.description}>
          Наши дизайнеры следят за мировыми трендами и всегда готовы предложить
          решение, которое будет актуально завтра.
        </p>
      </div>
      <div className={scss.b_y}>
        <p className={scss.title}>Собственное производство.</p>
        <p className={scss.description}>
          Позволяет контролировать заказ на любом производственном этапе.
        </p>
      </div>
      <div className={scss.b_u}>
        <p className={scss.title}>Точность</p>
        <p className={scss.description}>
          Мы обеспечиваем индивидуальный подход и скрупулёзно соблюдаем
          техническое задание и сроки выполнения заказа
        </p>
      </div>
      <div className={scss.b_i}>
        <p className={scss.title}>Пилотный экземпляр.</p>
        <p className={scss.description}>
          Мы всегда даем возможность клиенту оценить качество нашей продукции,
          представляя ему тестовый образец.
        </p>
      </div>
      <div className={scss.b_o}>
        <p className={scss.title}>Большой выбор текстиля.</p>
        <p className={scss.description}>
          Благодаря работе с ведущими мировыми
          производителями текстиля мы можем
          удовлетворить любой запрос нашего клиента:
          от самого бюджетного до эксклюзивного.
        </p>
      </div>
    </div>
  );
}

export default AdvantagesBlock;
