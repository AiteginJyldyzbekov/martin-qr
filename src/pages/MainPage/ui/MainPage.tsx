import useHook from "shared/hooks/useHook"
import AdvantagesBlock from "../../../components/advantagesBlock/AdvantagesBlock"
import CallBackForm from "../../../components/CallBackForm/CallBackForm"
import CatalogBlock from "../../../components/CatalogBlock/CatalogBlock"
import FaqBlock from "../../../components/FaqBlock/FaqBlock"
import FeedbackSlider from "../../../components/feedbackSlider/FeedbackSlider"
import MainBanner from "../../../components/MainBanner/MainBanner"
import NewsBlock from "../../../components/NewsBlock/NewsBlock"
import PoductBlock from "../../../components/ProductBlock/ProductBlock"
import YoutubeBlock from "../../../components/YoutubeBlock/YoutubeBlock"
import { useEffect } from "react"

const MainPage = () => {
    const { getItems: getNews, items: news } = useHook("news");
    const { getItems: getFeedback, items: feedbacks } = useHook("feedback")

    useEffect(() => {
        getNews()
        getFeedback()
    }, [])

    return (
        <>
            <MainBanner />
            <CatalogBlock />
            <PoductBlock />
            <YoutubeBlock />
            <AdvantagesBlock />
            <CallBackForm />
            <NewsBlock news={news} />
            <FeedbackSlider feedbacks={feedbacks} />
            <FaqBlock />
        </>
    )
}

export default MainPage