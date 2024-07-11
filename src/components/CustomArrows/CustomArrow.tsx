import React from 'react';
import  NextArrowIcon from '../../../public/images/next-arrow.svg'; // замените на ваш путь к иконке
import  PrevArrowIcon  from '../../../public/images/prev-arrow.svg'; // замените на ваш путь к иконке
import "./CustomArrow.scss"

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " prev-s"}
      style={{ ...style, display: 'flex', right: 0 }}
      onClick={onClick}
    >
      <NextArrowIcon />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " next-s"}
      style={{ ...style, display: 'flex', left: 0 }}
      onClick={onClick}
    >
      <PrevArrowIcon />
    </div>
  );
};

export { NextArrow, PrevArrow };
