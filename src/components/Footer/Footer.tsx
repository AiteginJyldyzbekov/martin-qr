

import scss from "./Footer.module.scss"

function Footer() {
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
                            <p>Каталог</p>
                            <a href="/catalog/costume">Костюмы</a>
                            <a>Верхняя одежда</a>
                            <a>Трикотаж</a>
                            <a>Платья</a>
                            <a>Блузки и рубашки</a>
                            <a>Брюки</a>
                            <a>Джинсы</a>
                            <a>Обувь</a>
                            <a>Аксессуары</a>
                        </div>
                        <div className={scss.bet}>
                            <p>Покупателям</p>
                            <a href="/">Контакты</a>
                            <p>#ago_in_style</p>
                            <a href="/">Отзывы</a>
                            <a href="/">Новости</a>
                            <a href="/">О компании</a>

                        </div>
                        <div className={scss.bey}>
                            <div>
                                <a href="">+996 551 99 51 59</a>
                                <a href="">@ago_in_style. kg</a>
                            </div>
                            <p>Наши подписчики в курсе всех новинок и выгодных предложений</p>
                            <button>Подписаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer