import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import scss from "./FeedbackSlider.module.scss";
import rewImg from "../../../public/images/rew_logo.png";
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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("feedbackSlider");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (
          !hasAnimated &&
          elementTop < window.innerHeight &&
          elementBottom >= 0
        ) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on component load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div
      id="feedbackSlider"
      className={`${scss.feedback_back} ${
        hasAnimated ? "animate__animated animate__slideInDown" : ""
      }`}
      style={{ animationDuration: "1s" }}
    >
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
};

export default FeedbackSlider;
