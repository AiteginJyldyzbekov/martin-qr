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
import BackBtn from "../../../components/backBtn/BackBtn"

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
            <div className="container">
                <img style={{ width: "100%" }} src="https://firebasestorage.googleapis.com/v0/b/fashion-admin-3dbe1.appspot.com/o/logo%2Finfo.png?alt=media&token=be254c7d-f21f-415e-961c-cc922d3d2dfb" alt="error" />
            </div>
            <YoutubeBlock />
            <AdvantagesBlock />
            <CallBackForm />
            <NewsBlock news={news} />
            <FeedbackSlider feedbacks={feedbacks} />
            <FaqBlock />
            <BackBtn />
        </>
    )
}

export default MainPage