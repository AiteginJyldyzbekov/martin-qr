
import scss from "./Header.module.scss";
import Wh from "../../../public/images/wh.svg";
import Burger_menu from "../../../public/images/burger_menu.svg";
import Logo from "../../../public/images/logo.svg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState();
  const updateSearchValue = (value: string) => {
    navigate(`?search=${encodeURIComponent(value)}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam: any = params.get('search') || '';
    setSearchValue(searchParam);
}, [location.search]);

  return (
    <header className={scss.header}>
      <div className={scss.backheader}>
        <div className={scss.top_header + " container"}>
          <div className={scss.left_top__header}>
            <a href="">Главная</a>
            <a href="">О компании</a>
            <a href="">Каталог</a>
            <a href="">Советы</a>
            <a href="">Доставка и оплата</a>
            <a href="">Для клиентов</a>
            <a href="">Отзывы</a>
            <a href="">Новости</a>
          </div>
          <div className={scss.right_top__header}>
            <a href="">
              <Wh />
            </a>
            <a href="">+996 551 99 51 59</a>
          </div>
        </div>
      </div>
      <div className={scss.bottom_header + " container"}>
        <div className={scss.catalog_b}>
          <button>
            <Burger_menu />
            <p>Каталог</p>
          </button>
        </div>
        <div className={scss.logo_b}>
          <Logo />
        </div>
        <div className={scss.search_b}>
          <input
            type="text"
            onChange={(e) => updateSearchValue(e.target.value)}
            value={searchValue}
            placeholder="Поиск по каталогу"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
