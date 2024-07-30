import React from 'react';
import styles from './AboutBlock.module.scss';

const AboutBlock: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.aboutUs}>
                <p className={styles.aboutText}>О компании</p>
                <h1 className={styles.title}>Швейное производство в Кыргызстане</h1>
                <p className={styles.subtitle}>Наша мастерская занимается пошивом и реализацией верхней одежды</p>

                <div className={styles.banner}></div>

                <div className={styles.services}>
                    <p>Тренчи • Плащи • Пальто • Куртки • Шубы • Пиджаки • Брючные костюмы</p>
                </div>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <h2>15 лет качества и надежности</h2>
                        <p>Компания "AGO InStyle" на сегодняшний день
                            является одной из лидирующих в сфере
                            производства верхней одежды в Кыргызской
                            Республике. 99% произведенной продукции
                            экспортируется за пределы Кыргызстана.</p>
                    </div>
                    <div className={styles.feature}>
                        <h2>Лидер по производству верхней одежды в Кыргызстане</h2>
                        <p>За годы усердной работы, мы стали лидерами в
                            производстве верхней женской одежды. Благодаря
                            высокой квалификации наших модельеров-
                            конструкторов, раскройщиков и швей, а также новому
                            турецкому оборудованию мы можем производить
                            изделия высокого качества.</p>
                    </div>
                    <div className={styles.feature}>
                        <h2>От идеи до доставки</h2>
                        <p>Мы предлагаем не просто одежду, а долгосрочное
                            партнерство, которое увеличит ваш доход. Мы
                            гарантируем сопровождение вашего заказа, начиная
                            от идеи до доставки.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBlock;