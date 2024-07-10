import NewsBlock from "../../../components/NewsBlock/NewsBlock"
import CallBackForm from "../../../components/CallBackForm/CallBackForm"
import useHook from "shared/hooks/useHook"
import { useEffect } from "react"
import ImageR from "shared/images/back_g.png"

const CatalogPage = () => {
    const { getItems: getNews, items: news } = useHook("news")

    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <CallBackForm backgroundImage={ImageR} />
            <NewsBlock news={news} />
        </>
    )
}

export default CatalogPage