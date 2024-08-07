import NewsBlock from "../../../components/NewsBlock/NewsBlock"
import CallBackForm from "../../../components/CallBackForm/CallBackForm"
import useHook from "shared/hooks/useHook"
import { useEffect } from "react"
import CatalogDetailBlock from "../../../components/CatalogDetailBlock/CatalogDetailBlock"
import { useParams } from "react-router-dom"
import Preloader from "shared/ui/Preloader/Preloader"
import BackBtn from "../../../components/backBtn/BackBtn"

const ProductsPage = () => {
    const { getItems: getNews, items: news } = useHook("news")
    const { productName } = useParams();
    const { getItemsWhere, items, isLoading } = useHook("products")

    useEffect(() => {
        getItemsWhere(productName)
    }, [])

    useEffect(() => {
        getNews()
    }, [])

    if (isLoading) return <Preloader />
    return (
        <>
            <CatalogDetailBlock items={items} title={productName} collectionName="products" />
            <CallBackForm />
            <NewsBlock news={news} />
            <BackBtn />
        </>
    )
}

export default ProductsPage;