import styles from "./BackBtn.module.scss";

const BackBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.wrapper + " container"}>
            <div className={styles.backBtn} onClick={scrollToTop}>
                <p>Наверх</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/fashion-admin-3dbe1.appspot.com/o/logo%2FtopIcon.svg?alt=media&token=d504ec93-c0ad-4853-800b-fec006b36923" alt="arrow" />
            </div>
        </div>
    );
}

export default BackBtn;