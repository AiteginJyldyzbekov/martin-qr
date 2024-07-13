import scss from "./CallBackForm.module.scss"
import imager from "../../../public/images/back_g.png"

function CallBackForm() {
  return (
    <div
      className={`${scss.callB_w} container`}
      style={{ backgroundImage: `url(${imager})` }}
    >
      <div className={scss.des_tit}>
        <p className={scss.title}>
          Напиши сейчас и получи <br /> выгодное предложение!
        </p>
        <p className={scss.desc}>
          Получите профессиональную консультацию от наших менеджеров
        </p>
      </div>
      <div>
        <form action="">
          <input type="text" placeholder="Введите свое имя" />
          <input type="text" placeholder="Введите свой номер" />
          <button>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default CallBackForm