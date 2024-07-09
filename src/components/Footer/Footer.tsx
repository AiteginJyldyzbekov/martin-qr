

import scss from "./Footer.module.scss"

function Footer() {
  return (
    <div className={scss.footer_back}>
        <div className="container">
            <div className={scss.footer_top}>
                <div>
                    <p className={scss.logo}>#AGO IN STYLE</p>
                </div>
                <div className={scss.social_nav}>
                    <a href="">Telegram</a>
                    <a href="">WHATSAPP</a>
                    <a href="">instagram</a>
                </div>
            </div>
            <div className={scss.footer_bottom}>
                <div className={scss.ber}>
                    <p>Каталог</p>
                    <a href="">Костюмы</a>
                    <a href="">Верхняя одежда</a>
                    <a href="">Трикотаж</a>
                    <a href="">Платья</a>
                    <a href="">Блузки и рубашки</a>
                    <a href="">Брюки</a>
                    <a href="">Джинсы</a>
                    <a href="">Шорты</a>
                    <a href="">Юбки</a>
                    <a href="">Обувь</a>
                    <a href="">Аксессуары</a>
                </div>
                <div className={scss.bet}>
                    <p>Покупателям</p>
                    <a href="">Доставка и оплата</a>
                    <a href="">Контакты</a>
                    <p>#ago_in_style</p>
                    <a href="">Отзывы</a>
                    <a href="">Новости</a>
                    <a href="">О компании</a>

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
  )
}

export default Footer