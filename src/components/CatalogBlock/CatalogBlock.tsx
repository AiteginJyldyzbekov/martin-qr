
import React from "react";
import scss from "./CatalogBlock.module.scss";
import c1 from "../../../public/images/c1.png";
import c2 from "../../../public/images/c2.png";
import c3 from "../../../public/images/c3.png";
import CatalogCard from "../catalogCard/CatalogCard";

interface Card {
  name: string;
  path: string;
  img: any;
}

const cards: Card[] = [
  {
    name: "Жакеты",
    path: "/catalog/blazer",
    img: c1,
  },
  {
    name: "Костюмы",
    path: "/catalog/costume",
    img: c2,
  },
  {
    name: "Куртки",
    path: "/catalog/jacket",
    img: c3,
  },
  {
    name: "Тренчи",
    path: "/catalog/trench",
    img: c1,
  },
  {
    name: "Пальто",
    path: "/catalog/coat",
    img: c2,
  },
];

const CatalogBlock: React.FC = () => {
  const rows = [];
  for (let i = 0; i < cards.length; i += 3) {
    const rowCards = cards.slice(i, i + 3);
    rows.push(rowCards);
  }

  return (
    <div className="container">
      <h2 className="title_g">Каталог</h2>
      {rows.map((row, rowIndex) => {
        const gridClass = row.length === 2 ? scss.grid_two : scss.grid_three;
        return (
          <div key={rowIndex} className={`${scss.c_card_wrapper} ${gridClass}`}>
            {row.map((el, index) => (
              <CatalogCard key={index} name={el.name} path={el.path} img={el.img} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CatalogBlock;
