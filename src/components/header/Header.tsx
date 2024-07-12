import React, { useState } from "react";
import scss from "./Header.module.scss";
import Wh from "../../../public/images/wh.svg";
import Burger_menu from "../../../public/images/burger_menu.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../../public/images/logo.svg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { catalogName, productName } = useParams()
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState();
  const updateSearchValue = (value: string) => {
    navigate(`?search=${encodeURIComponent(value)}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam: any = params.get("search") || "";
    setSearchValue(searchParam);
  }, [location.search]);

  const handleSearch = (e:any) => {
    if(catalogName || productName){
      updateSearchValue(e.target.value)
    }else{
      navigate("catalog/blazer")
    }
  }

  return (
    <>
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
              <button className={scss.burgermenu}>
                <Burger_menu />
              </button>
            </div>
            <div className={scss.logo_b}>
              <img src="/images/logo.svg" alt="logo" />
            </div>
            <div className={scss.right_top__header}>
              <a href="">
                <Wh />
              </a>
              <a href="" className={scss.number}>
                +996 551 99 51 59
              </a>
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
              onChange={(e) => handleSearch(e)}
              value={searchValue}
              placeholder="Поиск по каталогу"
            />
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className={scss.modal}>
          <div className={scss.modal_content}>
            <h2>Поиск по каталогу</h2>
            <input type="text" placeholder="Введите поисковый запрос" />
            <button onClick={handleCloseModal}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
