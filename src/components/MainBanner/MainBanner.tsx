
import scss from "./MainBanner.module.scss"

function MainBanner() {
  return (
    <div className={scss.banner_w + " " + "container"}>
        <div className={scss.banner_block}>
            <div className={scss.banner_b_top}>
            <h1>Производство женской одежды под вашим брендом</h1>
            <p>Полный комплекс услуг для СТМ: разработка коллекции одежды, разработка лекал и пошив образцов, подбор ткани, брендирование, пошив партии, отгрузка транспортными компаниями.</p>
            </div>
            <div className={scss.banner_b_bottom}>
                <button>Смотреть</button>
            </div>
        </div>
    </div>
  )
}

export default MainBanner