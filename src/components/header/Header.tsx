import React, { useState } from "react";
import scss from "./Header.module.scss";
import Wh from "../../../public/images/wh.svg";
import Burger_menu from "../../../public/images/burger_menu.svg";
import Close from "../../../public/images/close.svg";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../../public/images/logo.svg";
import { useScroll } from "../scrollProvider/ScrollProvider";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { catalogName, productName } = useParams()
  const isCatalogPath = location.pathname.includes('/catalog');
  const { scrollToRef, bannerRef, catalogRef, productRef, youtubeRef, advantagesRef, callbackRef, newsRef, feedbackRef, faqRef } = useScroll();
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


  const handleSearch = (e: any) => {
    if (catalogName || productName) {
      updateSearchValue(e.target.value)
    } else {
      navigate("catalog/blazer")
    }
  }

  return (
    <>
      <header className={scss.header}>
        <div className={scss.backheader}>
          <div className={scss.top_header + " container"}>
            <div className={scss.left_top__header}>
            <Link to="/" onClick={() => scrollToRef(bannerRef)}>Главная</Link>
            <Link to="/about" onClick={() => scrollToRef(youtubeRef)}>О компании</Link>
            <Link to="/" onClick={() => scrollToRef(catalogRef)}>Каталог</Link>
            <Link to="/" onClick={() => scrollToRef(faqRef)}>Советы</Link>
            <Link to="/" onClick={() => scrollToRef(advantagesRef)}>Для клиентов</Link>
            <Link to="/" onClick={() => scrollToRef(feedbackRef)}>Отзывы</Link>
            <Link to="/" onClick={() => scrollToRef(newsRef)}>Новости</Link>
              <button onClick={handleOpenModal} className={scss.burgermenu}>
                <Burger_menu />
              </button>
            </div>
            <div className={scss.logo_b}>
              <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/fashion-admin-3dbe1.appspot.com/o/logo%2Flogo.svg?alt=media&token=68e230ff-ee60-4e7c-8256-3641989a5fd2" alt="logo" /></Link>
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
              <p>КАТАЛОГ</p>
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
            <div className={scss.top_header + " container"}>
              <div className={scss.left_top__header}>

                <button onClick={handleCloseModal} className={scss.burgermenu}>
                  <Close />
                </button>
              </div>
              <div className={scss.logo_b}>
                <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/fashion-admin-3dbe1.appspot.com/o/logo%2Flogo.svg?alt=media&token=68e230ff-ee60-4e7c-8256-3641989a5fd2" alt="logo" /></Link>
              </div>
              <div className={scss.right_top__header}>
                <a href="https://api.whatsapp.com/send/?phone=996779164076">
                  <Wh />
                </a>
                <a href="" className={scss.number}>
                  +996 551 99 51 59
                </a>
              </div>
            </div>
            <div className={scss.m_bottom_header + " container"}>
            <Link to="/" onClick={() => scrollToRef(bannerRef)}>Главная</Link>
            <Link to="/" onClick={() => scrollToRef(youtubeRef)}>О компании</Link>
            <Link to="/" onClick={() => scrollToRef(catalogRef)}>Каталог</Link>
            <Link to="/" onClick={() => scrollToRef(faqRef)}>Советы</Link>
            <Link to="/" onClick={() => scrollToRef(advantagesRef)}>Для клиентов</Link>
            <Link to="/" onClick={() => scrollToRef(feedbackRef)}>Отзывы</Link>
            <Link to="/" onClick={() => scrollToRef(newsRef)}>Новости</Link>
              <a href="https://api.whatsapp.com/send/?phone=996779164076" className={scss.number}>
                +996 551 99 51 59
              </a>
              <div className={scss.search_b}>
                <p>Посик по каталогу</p>
                <input
                  type="text"
                  onClick={() => {
                    if (!isCatalogPath) {
                      navigate("catalog/blazer")
                    }
                    setIsModalOpen(false)
                  }}
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
