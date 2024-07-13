import scss from "./CallBackForm.module.scss"

function CallBackForm() {
  return (
    <div
      className={`${scss.callB_w} container`}
      style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/fashion-admin-3dbe1.appspot.com/o/logo%2Fback_g.png?alt=media&token=e8437543-c2c1-4c20-8c5b-5e08411309ed)` }}
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