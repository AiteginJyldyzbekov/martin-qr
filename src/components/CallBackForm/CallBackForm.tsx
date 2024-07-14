import React, { useEffect, useState } from "react";
import scss from "./CallBackForm.module.scss";

interface CallBackFormProps {
  backgroundImage?: string;
}

const CallBackForm: React.FC<CallBackFormProps> = ({ backgroundImage }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("callBackForm");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (
          !hasAnimated &&
          elementTop < window.innerHeight &&
          elementBottom >= 0
        ) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on component load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div
      id="callBackForm"
      className={`${scss.callB_w} container ${
        hasAnimated ? "animate__animated animate__fadeInRight" : ""
      }`}
      style={{ 
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/fashion-admin-3dbe1.appspot.com/o/logo%2Fback_g.png?alt=media&token=e8437543-c2c1-4c20-8c5b-5e08411309ed)`,
        animationDuration: "2s" 
      }}
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
  );
}

export default CallBackForm;
