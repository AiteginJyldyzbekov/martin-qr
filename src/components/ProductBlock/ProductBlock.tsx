
import React from "react";
import scss from "./ProductBlock.module.scss";
import c1 from "../../../public/images/c1.png";
import c2 from "../../../public/images/c2.png";
import c3 from "../../../public/images/c3.png";
import info from "../../../public/images/info.png";
import CatalogCard from "../catalogCard/CatalogCard";


interface Card {
  name: string;
  path: string;
  img: any;
}

const cards: Card[] = [
  {
    name: "Жакеты",
    path: "/finished-product/blazer",
    img: c1,
  },
  {
    name: "Костюмы",
    path: "/finished-product/costume",
    img: c2,
  },
  {
    name: "Куртки",
    path: "/finished-product/jacket",
    img: c3,
  },
  {
    name: "Тренчи",
    path: "/finished-product/trench",
    img: c1,
  },
];

const PoductBlock: React.FC = () => {
 

  return (
    <div className="container">
      <h2 className="title_g">Готовая продукция</h2>
      
          <div  className={scss.c_card_wrapper}>
            {cards.map((el, index) => (
              <CatalogCard key={index} name={el.name} path={el.path} img={el.img} />
            ))}
          </div>
          <img src={info} style={{width: "100%",padding: "30px 0"}} alt="info" />
    </div>
  );
};

export default PoductBlock;
