import React, { useEffect, useMemo, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import scss from "./NewsBlock.module.scss";
import { ImagesTypes } from "src/shared/types";
import { useNavigate } from "react-router-dom";
import Preloader from "shared/ui/Preloader/Preloader";

interface NewsTypes {
  date: string;
  desc1: string;
  desc2: string;
  images: ImagesTypes[];
  title: string;
  tid: string;
}

interface NewsBlockProps {
  isNewsPage?: boolean;
  news: NewsTypes[];
  isLoading?: boolean;
}

const NewsBlock: React.FC<NewsBlockProps> = ({ isNewsPage, news = [], isLoading }) => {
  const [displayedNews, setDisplayedNews] = useState<NewsTypes[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (news.length > 0) {
      setDisplayedNews(news.slice(0, 3));
      setCurrentIndex(3);
    }
  }, [news]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("newsBlock");
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

  const loadMore = () => {
    const nextIndex = currentIndex + 3;
    const newNews = news.slice(currentIndex, nextIndex);
    setDisplayedNews((prevNews) => [...prevNews, ...newNews]);
    setCurrentIndex(nextIndex);
  };

  const newsCards = useMemo(
    () =>
      displayedNews.map((el, index) => (
        <NewsCard
          key={index}
          img={el.images[0]?.url}
          date={el.date}
          title={el.title}
          desc={el.desc1}
          path={el.tid}
        />
      )),
    [displayedNews]
  );

  if (isLoading) return <Preloader />;
  return (
    <div
      id="newsBlock"
      className={`${scss.news_w} container ${
        hasAnimated ? "animate__animated animate__slideInLeft" : ""
      }`}
      style={{ animationDuration: "1s" }}
    >
      <h2>Новости и акции</h2>
      <div className={scss.news_card_w}>{newsCards}</div>
      {!isNewsPage && (
        <button onClick={() => navigate("news")}>Смотреть всё</button>
      )}

      {isNewsPage && currentIndex < news.length && (
        <button onClick={loadMore}>Смотреть ещё</button>
      )}
    </div>
  );
};

export default NewsBlock;
