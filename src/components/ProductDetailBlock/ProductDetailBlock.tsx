import Slider from "react-slick";
import scss from "./ProductDetailBlock.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const baseUrl = "/images";
const imagePaths = ["c1.png", "c1.png", "c1.png", "c1.png", "c1.png", "c1.png", "c1.png"]; // Массив с одной картинкой

interface ProductDetailBlockProps {
  item: any;
}

const ProductDetailBlock: React.FC<ProductDetailBlockProps> = ({ item }) => {
  const [size, setSize] = useState<string | null>(null);
  const settings = {
    customPaging: function (i: any) {
      const dotClass = item.images.length >= 2 ? "large" : "small";
      return (
        <a className={`${scss.imgbacks} ${scss[dotClass]}`}>
          <img src={item?.images[i]?.url} alt={`Slide thumbnail ${i + 1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: item?.images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: scss.custom_slider_class,
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value);
  };

  return (
    <div className={`${scss.product_detail_w} container`}>
      <div className={scss.product_left}>
        <Slider {...settings}>
          {item?.images.map((image: any, index: number) => (
            <div className={scss.slide} key={index}>
              <img src={image?.url} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={scss.product_right}>
        <p className={scss.product_name}>{item?.title}</p>
        <div className={scss.price_w}>
          <p className={scss.price}>{item?.price} сом</p>
        </div>
        <p className={scss.product_desc}>
          {item?.desc}
        </p>
        <div className={scss.size}>
          <div className={scss.size_top}>
            <p>Размер</p>
            <p>Определите размер</p>
          </div>
          <div className={scss.size_bottom}>
            <select name="" id="" onChange={handleSizeChange}>
              {item?.size.map((el: string) => (
                <option value={el} key={el}>{el}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={scss.colors__container}>
          <p>Цвет</p>
          <div className={scss.colors}>
            {item?.colors.map((color: any, index: any) => (
              <span key={index} style={{ backgroundColor: color }}></span>
            ))}
          </div>
        </div>
        <Link target="_blank" to={`https://api.whatsapp.com/send/?phone=996779164076&text=Здравствуйте,%20хочу%20заказать%20${item?.title},${item?.price}%20сом%20${size ? `размер%20${size}` : `размер%20${item?.size[0]}`}`}>Оставить заявку</Link>
      </div>
      <div></div>
    </div>
  );
}

export default ProductDetailBlock;