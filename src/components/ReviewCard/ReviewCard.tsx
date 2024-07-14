

import scss from "./ReviewCard.module.scss";
import StarRating from "./StarRaiting/StarRaiting";

interface ReviewCardProps {
  img: any;
  name: string;
  desc: string;
  stars: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ img, name, desc, stars }) => {
  return (
    <div className={scss.review_card_wrapper}>
      <div className={scss.left}>
        <img src={img} alt={name} width={80} height={70} className={scss.review_img} />
      </div>
      <div className={scss.right}>
        <p className={scss.title}>{name}</p>
        <p className={scss.desc}>{desc}</p>
        <div className={scss.s_w}><StarRating stars={stars} /> <p>{stars}.0</p></div>
      </div>
    </div>
  );
};

export default ReviewCard;
