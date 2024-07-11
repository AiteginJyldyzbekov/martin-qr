import useHook from "shared/hooks/useHook";
import CatalogDetailItem from "../CatalogDetailItem/CatalogDetailItem";
import styles from "./CatalogDetailBlock.module.scss"
import { useParams } from "react-router-dom";
import { Key, useEffect } from "react";
import Preloader from "shared/ui/Preloader/Preloader";

const titles: { [key: string]: string } = {
    jacket: 'Куртки',
    coat: 'Пальто',
    blazer: 'Жакеты',
    trench: 'Тренчи',
    costume: 'Костюмы'
  };
  
  interface CatalogDetailBlockProps {
    items: any; 
    title: keyof typeof titles;
  }
  
  const CatalogDetailBlock: React.FC<CatalogDetailBlockProps> = ({ items, title }) => {
    return (
        <div className={styles.jacketList + " container"}>
            <h1>{titles[title]}</h1>
            <div className={styles.select__container}>
                <select>
                    <option>Размер</option>
                </select>
                <select>
                    <option>Цвет</option>
                </select>
                <select>
                    <option>Сортировка</option>
                </select>
            </div>
            <div className={styles.jackets}>
                {items?.map((jacket: { id: Key; }) => (
                    <CatalogDetailItem key={jacket.id} tid={items.tid} catalogItem={jacket} />
                ))}
            </div>
        </div>

    )
}

export default CatalogDetailBlock;