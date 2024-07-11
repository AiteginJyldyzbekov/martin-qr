import { formatDate } from 'shared/assets/formatDate/formatDate';
import scss from './NewsCard.module.scss';
import React from 'react';

interface NewsCardProps {
  img: any;
  date: string;
  title: string;
  desc: string;
  path: string;
}

const NewsCard: React.FC<NewsCardProps> = React.memo(({ img, date, title, desc, path }) => {
  return (
    <div className={scss.newsCard}>

      <div className={scss.c_img}>
        <img src={img} alt='' />
      </div>
      <div className={scss.c_bottom}>
        <p className={scss.date}>{formatDate(date)}</p>
        <p className={scss.title}>{title}</p>
        <p className={scss.desc}>{desc}</p>
        <a href={`/news/${path}`}>Читать дальше →</a>
      </div>
    </div>
  );
})
export default NewsCard;
