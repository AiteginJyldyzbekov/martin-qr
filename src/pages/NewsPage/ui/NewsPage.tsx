import useHook from "shared/hooks/useHook"
import NewsBlock from "../../../components/NewsBlock/NewsBlock"
import { useEffect } from "react";
import BackBtn from "../../../components/backBtn/BackBtn";

const NewsPage = () => {
    const { getItems: getNews, items: news, isLoading } = useHook("news");

    useEffect(() => {
        getNews();
    }, [])
    return (
        <div>
            <p className='showPage'>Главная &nbsp; &nbsp;  / &nbsp; &nbsp;  Новости</p>
            <NewsBlock isNewsPage news={news} isLoading={isLoading} />
            <BackBtn />
        </div>
    )
}

export default NewsPage