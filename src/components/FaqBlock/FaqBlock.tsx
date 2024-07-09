"use client";
import React, { useState } from "react";
import scss from "./FaqBlock.module.scss";
import Arrow from "../../../public/images/arrow.svg";

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

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`${scss.faqblock_wrapper} container`}>
      <h2>Часто задаваемые вопросы</h2>
      <div className={scss.faqblock_card_w}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`${scss.faq_card} ${activeIndex === index ? scss.active : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className={scss.top}>
              <div className={scss.left}>
                {item.question}
              </div>
              <div className={scss.right}>
                <Arrow />
              </div>
            </div>
            <div className={scss.bottom}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqBlock;
