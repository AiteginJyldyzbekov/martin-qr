import AdvantagesBlock from "../../../components/advantagesBlock/AdvantagesBlock"
import CallBackForm from "../../../components/CallBackForm/CallBackForm"
import CatalogBlock from "../../../components/CatalogBlock/CatalogBlock"
import FaqBlock from "../../../components/FaqBlock/FaqBlock"
import FeedbackSlider from "../../../components/feedbackSlider/FeedbackSlider"
import MainBanner from "../../../components/MainBanner/MainBanner"
import NewsBlock from "../../../components/NewsBlock/NewsBlock"
import PoductBlock from "../../../components/ProductBlock/ProductBlock"
import YoutubeBlock from "../../../components/YoutubeBlock/YoutubeBlock"

const MainPage = () => {
    return (
        <div>
             <MainBanner />
          <CatalogBlock />
          <PoductBlock />
          <YoutubeBlock></YoutubeBlock>
          <AdvantagesBlock></AdvantagesBlock>
          <CallBackForm />
          <NewsBlock />
          <FeedbackSlider />
          <FaqBlock />
        </div>
    )
}

export default MainPage