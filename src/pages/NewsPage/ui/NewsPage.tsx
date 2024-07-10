import useHook from "shared/hooks/useHook"
import NewsBlock from "../../../components/NewsBlock/NewsBlock"
import { useEffect } from "react";

const NewsPage = () => {
    const { getItems: getNews, items: news, isLoading } = useHook("news");

    useEffect(() => {
        getNews();
    }, [])
    return (
        <div>
            <p className='showPage'>Главная &nbsp; &nbsp;  / &nbsp; &nbsp;  Новости</p>
            <NewsBlock isNewsPage news={news} isLoading={isLoading} />
        </div>
    )
}

export default NewsPage