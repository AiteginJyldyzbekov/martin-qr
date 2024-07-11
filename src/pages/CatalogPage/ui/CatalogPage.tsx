import NewsBlock from "../../../components/NewsBlock/NewsBlock"
import CallBackForm from "../../../components/CallBackForm/CallBackForm"
import useHook from "shared/hooks/useHook"
import { useEffect } from "react"
import ImageR from "shared/images/back_g.png"
import CatalogDetailBlock from "../../../components/CatalogDetailBlock/CatalogDetailBlock"
import { useParams } from "react-router-dom"
import Preloader from "shared/ui/Preloader/Preloader"

const CatalogPage = () => {
    const { getItems: getNews, items: news } = useHook("news")
    const { catalogName } = useParams();
    const { getItemsWhere, items, isLoading } = useHook("catalog")

    useEffect(() => {
        getItemsWhere(catalogName)
    }, [])

    useEffect(() => {
        getNews()
    }, [])

    if (isLoading) return <Preloader />
    return (
        <>
            <CatalogDetailBlock items={items} title={catalogName}/>
            <CallBackForm backgroundImage={ImageR} />
            <NewsBlock news={news} />
        </>
    )
}

export default CatalogPage