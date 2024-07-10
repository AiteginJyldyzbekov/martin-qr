import React from 'react';
import styles from './CatalogDetailItem.module.scss';

interface CatalogDetailItemProps {
    catalogItem: any;
}

const CatalogDetailItem: React.FC<CatalogDetailItemProps> = ({ catalogItem }) => {
    return (
        <div className={styles.jacketItem}>
            <img src={catalogItem.images[0].url} alt={catalogItem.title} />
            <p className={styles.name}>{catalogItem.title}</p>
            <p className={styles.price}>{catalogItem.price} сом</p>
            <div className={styles.colors}>
                {catalogItem.colors.map((color:any, index:any) => (
                    <span key={index} style={{ backgroundColor: color }}></span>
                ))}
            </div>
        </div>
    );
};

export default CatalogDetailItem;