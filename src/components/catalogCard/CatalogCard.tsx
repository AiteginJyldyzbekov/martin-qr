

import scss from "./CatalogCard.module.scss";

interface CatalogCardProps {
  name: string;
  path: string;
  img: any;
}

const CatalogCard: React.FC<CatalogCardProps> = ({ name, path, img }) => {
  console.log(img);
  
  return (
    <div className={scss.card_w} style={{backgroundImage: `url(${img})`}}>
      <p>{name}</p>
      <a href={path}>Смотреть</a>
    </div>
  );
};

export default CatalogCard;
