

import { useScroll } from "../scrollProvider/ScrollProvider";
import scss from "./Footer.module.scss"
import { Link } from "react-router-dom";

function Footer() {
    const { scrollToRef, bannerRef, catalogRef, productRef, youtubeRef, advantagesRef, callbackRef, newsRef, feedbackRef, faqRef } = useScroll();
    return (
        <>
            <div className={scss.footer_top + " container"}>
                <div>
                    <p className={scss.logo}>#AGO IN STYLE</p>
                </div>
                <div className={scss.social_nav}>
                    <a href="">Telegram</a>
                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=996779164076">WHATSAPP</a>
                    <a target="_blank" href="https://www.instagram.com/ago_instyle?igsh=MWl3dWdscnJjdzNpNQ==">instagram</a>
                </div>
            </div>
            <div className={scss.footer_back}>
                <div className="container">
                    <div className={scss.footer_bottom}>
                        <div className={scss.ber}>
                            <Link to="/" onClick={() => scrollToRef(catalogRef)}>Каталог</Link>
                            <a href="/catalog/costume">Костюмы</a>
                        </div>
                        <div className={scss.bet}>
                            <p>Покупателям</p>
                            <Link to="/" onClick={() => scrollToRef(callbackRef)}>Контакты</Link>
                            <p>#ago_in_style</p>
                            <Link to="/" onClick={() => scrollToRef(feedbackRef)}>Отзывы</Link>
                            <Link to="/" onClick={() => scrollToRef(newsRef)}>Новости</Link>
                            <Link to="/" onClick={() => scrollToRef(youtubeRef)}>О компании</Link>

                        </div>
                        <div className={scss.bey}>
                            <div>
                                <a href="">+996 551 99 51 59</a>
                                <a href="">@ago_in_style.kg</a>
                            </div>
                            <p>Наши подписчики в курсе всех новинок и выгодных предложений</p>
                            <button>
                                <a href="https://www.instagram.com/ago_in_style/" target="_blank">
                                    Подписаться
                                </a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer