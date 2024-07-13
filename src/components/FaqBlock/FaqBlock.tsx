import React, { useState, useEffect } from "react";
import scss from "./FaqBlock.module.scss";
import "animate.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Каков основной ассортимент продукции AGO InStyle?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo vitae est. Nesciunt vero ut aperiam quo repellendus ipsa atque labore eligendi! Labore sapiente nemo iste veritatis harum fuga! Recusandae!",
  },
  {
    question: "В какие страны экспортируется продукция AGO InStyle?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo vitae est. Nesciunt vero ut aperiam quo repellendus ipsa atque labore eligendi! Labore sapiente nemo iste veritatis harum fuga! Recusandae!",
  },
  {
    question: "Какие услуги предлагает AGO InStyle помимо производства одежды?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo vitae est. Nesciunt vero ut aperiam quo repellendus ipsa atque labore eligendi! Labore sapiente nemo iste veritatis harum fuga! Recusandae!",
  },
  {
    question: "Сколько сотрудников работает в AGO InStyle?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo vitae est. Nesciunt vero ut aperiam quo repellendus ipsa atque labore eligendi! Labore sapiente nemo iste veritatis harum fuga! Recusandae!",
  },
  {
    question: "Могу ли я заказать персональный дизайн одежды в AGO InStyle?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo vitae est. Nesciunt vero ut aperiam quo repellendus ipsa atque labore eligendi! Labore sapiente nemo iste veritatis harum fuga! Recusandae!",
  },
];

const FaqBlock: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("faqBlock");
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
      id="faqBlock"
      className={`${scss.faqblock_wrapper} container ${
        hasAnimated ? "animate__animated animate__slideInLeft" : ""
      }`}
      style={{ animationDuration: "1s" }}
    >
      <h2>Часто задаваемые вопросы</h2>
      <div className={scss.faqblock_card_w}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`${scss.faq_card} ${
              activeIndex === index ? scss.active : ""
            }`}
            onClick={() => toggleFaq(index)}
          >
            <div className={scss.top}>
              <div className={scss.left}>{item.question}</div>
              <div className={scss.right}>
                <img src="/images/arrow.svg" alt="" />
              </div>
            </div>
            <div className={scss.bottom}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqBlock;
