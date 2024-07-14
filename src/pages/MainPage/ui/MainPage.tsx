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
import { useEffect, useRef } from "react"
import BackBtn from "../../../components/backBtn/BackBtn"
import { useScroll } from "../../../components/scrollProvider/ScrollProvider"

const MainPage = () => {
    const { getItems: getNews, items: news } = useHook("news");
    const { getItems: getFeedback, items: feedbacks } = useHook("feedback")
    const { getItems: getAds, items: ads, isLoading } = useHook("ad")

  
    const { bannerRef, catalogRef, productRef, youtubeRef, advantagesRef, callbackRef, newsRef, feedbackRef, faqRef } = useScroll();

    useEffect(() => {
        getNews();
        getFeedback();
        getAds();
    }, []);

    const scrollToRef = (ref:any) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div ref={bannerRef}>
                <MainBanner ads={ads} isLoading={isLoading} />
            </div>
            <div ref={catalogRef}>
                <CatalogBlock />
            </div>
            <div ref={productRef}>
                <PoductBlock />
            </div>
            <div className="container">
                <img style={{ width: "100%" }} src="https://firebasestorage.googleapis.com/v0/b/fashion-admin-3dbe1.appspot.com/o/logo%2Finfo.png?alt=media&token=be254c7d-f21f-415e-961c-cc922d3d2dfb" alt="error" />
            </div>
            <div ref={youtubeRef}>
                <YoutubeBlock />
            </div>
            <div ref={advantagesRef}>
                <AdvantagesBlock />
            </div>
            <div ref={callbackRef}>
                <CallBackForm />
            </div>
            <div ref={newsRef}>
                <NewsBlock news={news} />
            </div>
            <div ref={feedbackRef}>
                <FeedbackSlider feedbacks={feedbacks} />
            </div>
            <div ref={faqRef}>
                <FaqBlock />
            </div>
            <BackBtn />
        </>
    )
}

export default MainPage