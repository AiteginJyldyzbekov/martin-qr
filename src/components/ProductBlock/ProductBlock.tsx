import React, { useEffect, useState } from "react";
import scss from "./ProductBlock.module.scss";
import CatalogCard from "../catalogCard/CatalogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../CustomArrows/CustomArrow"; // замените на ваш путь к компонентам

interface Card {
  name: string;
  path: string;
  img: string;
}

const cards: Card[] = [
  {
    name: "Жакеты",
    path: "/jakety",
    img: "/images/c1.png",
  },
  {
    name: "Костюмы",
    path: "/kostumy",
    img: "/images/c2.png",
  },
  {
    name: "Куртки",
    path: "/kurtki",
    img: "/images/c3.png",
  },
  {
    name: "Тренчи",
    path: "/trenchi",
    img: "/images/c1.png",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: "custom-slider-class",
  responsive: [
    {
      breakpoint: 768, // настройки для экранов меньше чем 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568, // настройки для экранов меньше чем 568px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductBlock: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("youtubeBlock");
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
    handleScroll(); // Проверяем видимость при загрузке компонента

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div
      id="youtubeBlock"
      className={`${scss.prod_w} container ${
        hasAnimated ? "animate__animated animate__backInRight" : ""
      }`}
      style={{ animationDuration: "2s" }}
    >
      <h2 className="title_g">Готовая продукция</h2>

      <div className={scss.c_card_wrapper}>
        <Slider {...sliderSettings}>
          {cards.map((el, index) => (
            <CatalogCard key={index} name={el.name} path={el.path} img={el.img} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductBlock;
