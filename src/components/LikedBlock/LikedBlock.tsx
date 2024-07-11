import React from 'react';
import scss from './LikedBlock.module.scss';
import CatalogCard from '../catalogCard/CatalogCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../CustomArrows/CustomArrow'; // замените на ваш путь к компонентам

interface Card {
  name: string;
  path: string;
  img: string;
}

const cards: Card[] = [
  {
    name: 'Жакеты',
    path: '/jakety',
    img: '/images/c1.png',
  },
  {
    name: 'Костюмы',
    path: '/kostumy',
    img: '/images/c2.png',
  },
  {
    name: 'Куртки',
    path: '/kurtki',
    img: '/images/c3.png',
  },
  {
    name: 'Тренчи',
    path: '/trenchi',
    img: '/images/c1.png',
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
  className: 'custom-slider-class',
};

const LikedBlock: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title_g">Вам может понравиться</h2>

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

export default LikedBlock;
