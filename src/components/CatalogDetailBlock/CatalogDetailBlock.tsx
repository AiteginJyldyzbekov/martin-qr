import useHook from "shared/hooks/useHook";
import CatalogDetailItem from "../CatalogDetailItem/CatalogDetailItem";
import styles from "./CatalogDetailBlock.module.scss"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Key, useEffect, useMemo, useState } from "react";
import Preloader from "shared/ui/Preloader/Preloader";
import { filterProducts } from "shared/assets/filter/filter";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "shared/config/firebase/firebase";

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
    collectionName: string;
}
const CatalogDetailBlock: React.FC<CatalogDetailBlockProps> = ({ items, title, collectionName }) => {
    const [size, setSize] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [sortByPrice, setSortByPrice] = useState<'asc' | 'desc' | ''>('');
    const [searchValue, setSearchValue] = useState();
    const { search } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchParam: any = params.get('search') || '';
        setSearchValue(searchParam);
    }, [location.search]);

    const filteredItems = useMemo(() => {
        return filterProducts(items, { size, color, sortByPrice, searchValue });
    }, [size, color, sortByPrice, searchValue]);

    return (
        <div className={styles.jacketList + " container"}>
            <h1>{titles[title]}</h1>
            <div className={styles.select__container}>
                <select value={size} onChange={(e) => {
                    setSize(e.target.value)
                }}>
                    <option value="">Размер</option>
                    <option value="36">36</option>
                    <option value="38">38</option>
                    <option value="40">40</option>
                    <option value="42">42</option>
                    <option value="44">44</option>
                </select>
                <select value={color} onChange={(e) => {
                    setSize(e.target.value)
                }}>
                    <option value="">Цвет</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                <select value={sortByPrice} onChange={(e) => {
                    setSortByPrice(e.target.value as 'asc' | 'desc' | '')
                }}>
                    <option value="">Сортировка</option>
                    <option value="asc">По возрастанию цены</option>
                    <option value="desc">По убыванию цены</option>
                </select>
            </div>
            <div className={styles.jackets}>
                {filteredItems.map((jacket: any) => (
                    <CatalogDetailItem key={jacket.tid} catalogItem={jacket} />
                ))}
            </div>
        </div>
    );
};

export default CatalogDetailBlock;