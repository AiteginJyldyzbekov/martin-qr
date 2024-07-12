import ProductDetailBlock from "../../../../src/components/ProductDetailBlock/ProductDetailBlock";
import LikedBlock from "../../../../src/components/LikedBlock/LikedBlock";
import scss from "../../../components/CallBackForm/CallBackForm.module.scss"
import { useEffect, useState } from "react";
import useHook from "shared/hooks/useHook";
import { useParams } from "react-router-dom";

const CatalogDetailPage = () => {
    const { getItemDetail: getCatalog, itemDetail: catalog } = useHook("catalog")
    const { productId: id } = useParams();

    useEffect(() => {
        getCatalog(id)
    }, [])

    return (
        <div>
            <ProductDetailBlock item={catalog} />
            <LikedBlock />
            <div
                className={`${scss.callB_w} container`}
                style={{ backgroundImage: `url(/images/bagg.png)`, marginTop: "70px" }}
            >
                <div className={scss.des_tit}>
                    <p className={scss.title}>
                        Промокод -10% за подписку
                        на новости
                    </p>
                </div>
                <div>
                    <form action="">
                        <input style={{ width: "50%" }} type="text" placeholder="Введите ваш e-mail" />
                        <button>Подписаться</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CatalogDetailPage;
