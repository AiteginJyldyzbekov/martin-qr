import React, { useState } from "react";
import scss from "./Header.module.scss";
import Wh from "../../../public/images/wh.svg";
import Burger_menu from "../../../public/images/burger_menu.svg";
import Close from "../../../public/images/close.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../../public/images/logo.svg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = '';
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);


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
              <button onClick={handleOpenModal} className={scss.burgermenu}>
                <Burger_menu />
              </button>
            </div>
            <div className={scss.logo_b}>
              <Link to="/"><img src="/images/logo.svg" alt="logo" /></Link>
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
              onChange={(e) => updateSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Поиск по каталогу"
            />
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className={scss.modal}>
          <div className={scss.modal_content}>
          <div className={scss.top_header + " container"}>
            <div className={scss.left_top__header}>
              
              <button onClick={handleCloseModal} className={scss.burgermenu}>
                <Close />
              </button>
            </div>
            <div className={scss.logo_b}>
              <Link to="/"><img src="/images/logo.svg" alt="logo" /></Link>
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
          <div className={scss.m_bottom_header + " container"}>
          <Link to="#">Главная</Link>
              <Link to="#">О компании</Link>
              <Link to="#">Каталог</Link>
              <Link to="#">Советы</Link>
              <Link to="#">Доставка и оплата</Link>
              <Link to="#">Для клиентов</Link>
              <Link to="#">Отзывы</Link>
              <Link to="#">Новости</Link>
              <a href="tel:+996551995159" className={scss.number}>
                +996 551 99 51 59
              </a>
              <div className={scss.search_b}>
                <p>Посик по каталогу</p>
            <input
              type="text"
              onChange={(e) => updateSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Поиск по каталогу"
            />
          </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
