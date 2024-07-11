import { useNavigate, useParams } from "react-router-dom";
import styles from "./NewsDetailPage.module.scss"
import useHook from "shared/hooks/useHook";
import { useEffect } from "react";
import { formatDate } from "shared/assets/formatDate/formatDate";
import Preloader from "shared/ui/Preloader/Preloader";

const NewsDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getItemDetail, itemDetail, isLoading } = useHook("news");

    useEffect(() => {
        if (id) {
            getItemDetail(id)
        }
    }, [])

    if (isLoading) return <Preloader />
    return (
        <div className={styles.wrapper + " container"}>
            <p className={styles.main__title}>Новости и акции</p>
            <p className={styles.news__title}>{itemDetail?.title}</p>
            <p className={styles.date}>{formatDate(itemDetail?.date)}</p>
            <img src={itemDetail?.images[0]?.url} />
            <div className={styles.text__container}>
                <p className={styles.desc1}>{itemDetail?.desc1}</p>
                <p className={styles.desc2}>{itemDetail?.desc2}</p>
            </div>
            <button onClick={() => navigate("/")}>Смотреть каталог</button>
        </div>
    )
}

export default NewsDetailPage