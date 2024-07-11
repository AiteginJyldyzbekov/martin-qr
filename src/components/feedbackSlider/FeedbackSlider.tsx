import ReviewCard from "../ReviewCard/ReviewCard";
import scss from "./FeedbackSlider.module.scss";
import rewImg from "../../../public/images/rew_logo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const reviewCards = [
  {
    img: rewImg,
    name: 'Алиса Стемнова',
    desc: 'Классный пошив, все точно по лекалам!',
    stars: 5,
  },
  {
    img: rewImg,
    name: 'Алиса Стемнова',
    desc: 'Классный пошив, все точно по лекалам!',
    stars: 1,
  },
  {
    img: rewImg,
    name: 'Алиса Стемнова',
    desc: 'Классный пошив, все точно по лекалам!',
    stars: 1,
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "custom-slider-class",
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
