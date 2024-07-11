import Slider from "react-slick";
import scss from "./ProductDetailBlock.module.scss";

const baseUrl = "/images";
const imagePaths = ["c1.png","c1.png","c1.png","c1.png","c1.png","c1.png","c1.png"]; // Массив с одной картинкой

const settings = {
    customPaging: function (i: any) {
      const dotClass = imagePaths.length >= 2 ? "large" : "small";
      return (
        <a className={`${scss.imgbacks} ${scss[dotClass]}`}>
          <img src={`${baseUrl}/${imagePaths[i]}`} alt={`Slide thumbnail ${i + 1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: imagePaths.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: scss.custom_slider_class,
  };

function ProductDetailBlock() {
  return (
    <div className={`${scss.product_detail_w} container`}>
      <div className={scss.product_left}>
        <Slider {...settings}>
          {imagePaths.map((path, index) => (
            <div className={scss.slide} key={index}>
              <img src={`${baseUrl}/${path}`} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={scss.product_right}>
        <p className={scss.product_name}>name</p>
        <div className={scss.price_w}>
          <p className={scss.price}>price</p>
          <button className={scss.liked}>
            <img src="/images/heart.svg" alt="like" />
            <p>Добавить в избранное</p>
          </button>
        </div>

        <p className={scss.product_desc}>
          Блейзер с длинными рукавами. Застегивается на золотые пуговицы. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Esse minus
          inventore ab odit dicta et magni ut dolores aperiam dignissimos quas
          asperiores doloribus perferendis suscipit pariatur, a laboriosam,
          voluptas omnis?
        </p>
        <div className={scss.size}>
          <div className={scss.size_top}>
            <p>Размер</p>
            <p>Определите размер</p>
          </div>
          <div className={scss.size_bottom}>
            <select name="" id="">
              <option value="">Выберите</option>
            </select>
          </div>
        </div>
        <div className={scss.colors}>
          <p>Цвет</p>
        </div>
        <button>Оставить заявку</button>
      </div>
      <div></div>
    </div>
  );
}

export default ProductDetailBlock;
