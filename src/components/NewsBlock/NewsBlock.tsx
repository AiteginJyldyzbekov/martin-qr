
import NewsCard from "../NewsCard/NewsCard";
import scss from "./NewsBlock.module.scss";
import n1 from "../../../public/images/n1.png";
import n2 from "../../../public/images/n2.png";
import n3 from "../../../public/images/n3.png";



const newsCard = [
  {
    img: n1,
    date: "20 мая 2024",
    title: "AGO IN STYLE исполняется 10 лет!",
    desc: "Этим летом компания празднует свой юбилей!",
    path: "",
  },
  {
    img: n2,
    date: "12 октября 2023",
    title: "Коллаборация AGO IN STYLE ✕ HSE Design",
    desc: `Школа дизайна НИУ ВШЭ и AGO IN STYLE
& ALBIONE провели конкурс среди студентов на
создание классных принтов для лимитированной…`,
    path: "",
  },
  {
    img: n3,
    date: "1 мая 2023",
    title: "Летняя коллекция уже в продаже!",
    desc: `Свежее поступление: новые костюмы, платья,
блузки и многое другое ждут покупательниц.`,
    path: "",
  },
];

function NewsBlock() {
  return (
    <div className={scss.news_w + " container"}>
      <h2>Новости и акции</h2>
      <div className={scss.news_card_w}>
        {newsCard.map((el, index) => (
          <NewsCard
            key={index}
            img={el.img}
            date={el.date}
            title={el.title}
            desc={el.desc}
            path={el.path}
          />
        ))}
      </div>
      <a href="">Смотреть</a>
    </div>
  );
}

export default NewsBlock;
