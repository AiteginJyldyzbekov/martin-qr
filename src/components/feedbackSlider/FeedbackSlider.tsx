import ReviewCard from "../ReviewCard/ReviewCard";
import scss from "./FeedbackSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "custom-slider-class",
  responsive: [
    {
      breakpoint: 768, // настройки для экранов меньше чем 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568, // настройки для экранов меньше чем 568px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeedbackSlider = ({ feedbacks }: { feedbacks: any }) => {
  return (
    <div className={scss.feedback_back}>
      <div className={`${scss.feedback_slider_w} container`}>
        <h2>Отзывы клиентов</h2>
        <div className={scss.feedback_card_w}>
          <Slider {...sliderSettings}>
            {feedbacks?.map((review: any, index: number) => (
              <ReviewCard
                key={index}
                img={review.images[0]?.url}
                name={review.name}
                desc={review.desc}
                stars={review.stars}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSlider;
