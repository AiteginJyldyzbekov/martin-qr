import scss from "./Osnov.module.scss";

function Osnov() {
  return (
    <div className={scss.osnov_w + " container"}>
      <p className={scss.title}>
        Основная деятельность - производство и реализация верхней одежды для
        женщин
      </p>
      <p className={scss.sub_title}>Это включает в себя:</p>
      <div className={scss.osnow_w_cards}>
        <div className={scss.osnow_card}>
          <img
            src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces"
            alt=""
          />
          <p className={scss.c_title}>Дизайн</p>
          <p className={scss.c_desc}>
            Конструкторский отдел компании работает по двум направлениям: <br />
            • разрабатывает свои уникальные модели верхней одежды, следя за
            модными тенденциями и потребительскими предпочтениями <br />• а
            также конструирует модели по вашему заказу.
          </p>
        </div>
        <div className={scss.osnow_card}>
          <img
            src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces"
            alt=""
          />
          <p className={scss.c_title}>Производство</p>
          <p className={scss.c_desc}>
            Компания имеет собственную производственную базу, включающую
            производственные участки по разбраковке, декатировке, раскрою,
            пошиву, отделке, влажно-тепловой обработке, многоступенчатому
            контролю качества и упаковке швейных изделий.
          </p>
        </div>
        <div className={scss.osnow_card}>
          <img
            src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces"
            alt=""
          />
          <p className={scss.c_title}>Логистика</p>
          <p className={scss.c_desc}>
            Отдел логистики нашей компании занимается организацией входящих
            поставок сырья и фурнитуры из Турции, Китая и других стран, а также
            организацией исходящих поставок готовой продукции наши дорогим
            клиентам в Россию, Казахстан и другие страны.
          </p>
        </div>
      </div>
      <div className={scss.history_block}>
        <p className={scss.title}>История компании</p>
        <div className={scss.history_w}>
            <div className={scss.card}>
                <div className={scss.left}>
                    <p>2004</p>
                </div>
                <div className={scss.right}>
                    <p className={scss.c_title}>Основание</p>
                    <p className={scss.desc}>История компании началась с мечты и упорства молодой девушки Гульзат, которая всего в двадцать лет решила попробовать свои силы в бизнесе.</p>
                </div>
            </div>
            <div className={scss.card}>
                <div className={scss.left}>
                    <p>2005</p>
                </div>
                <div className={scss.right}>
                    <p className={scss.c_title}>Гульзат и Орозгуль</p>
                    <p className={scss.desc}>В 2005 году к работе присоединилась старшая сестра Гульзат, Орозгуль. Совместно они нашли область специализации для своей компании, сосредоточившись на производстве женской верхней одежды</p>
                </div>
            </div>
            <div className={scss.card}>
                <div className={scss.left}>
                    <p>2008</p>
                </div>
                <div className={scss.right}>
                    <p className={scss.c_title}>Первый цех</p>
                    <p className={scss.desc}>В 2008 году на заработанные средства они купили свой первый цех с 10 швейными машинками, что стало началом нового, производственного, этапа в их деятельности.</p>
                </div>
            </div>
            <div className={scss.card}>
                <div className={scss.left}>
                    <p>2014</p>
                </div>
                <div className={scss.right}>
                    <p className={scss.c_title}>Российский рынок</p>
                    <p className={scss.desc}>В 2014 году компания вышла на российский рынок.</p>
                </div>
            </div>
            <div className={scss.card}>
                <div className={scss.left}>
                    <p>2024</p>
                </div>
                <div className={scss.right}>
                    <p className={scss.c_title}>Настоящее время</p>
                    <p className={scss.desc}>Благодаря упорному труду и постоянному стремлению к развитию, сегодня компания имеет несколько производственных площадок в разных городах, 230 сотрудников и производит более 150 тыс. изделий в год.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Osnov;
