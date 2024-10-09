import React from 'react';
import styles from "./header.module.css"
import logo_img from "../../assets/images/logo.png"
import telegram_link from "../../assets/images/contacts/telegram.png"
import whatsapp_link from "../../assets/images/contacts/whatsapp.png"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.leftContect}>
                        <a href='#' className={styles.logo}>
                            <img src={logo_img} alt="logo_img" />
                        </a>
                        <nav className={styles.nav}>
                            <ul>
                                <li><a className={styles.nav_link} href="#">Авто из Кореи</a></li>
                                <li><a className={styles.nav_link} href="#">Авто из Китая</a></li>
                                <li><a className={styles.nav_link} href="#">Авто из Японии</a></li>
                                <li><a className={styles.nav_link} href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.contact}>
                        <a href="#" className={styles.contactNumber}>8 (800) 500-49-46</a>
                        <div className={styles.contactLinks}>
                            <a href="#" className={styles.contactLink}>
                                <img src={telegram_link} alt="telegram_link" />
                            </a>
                            <a href="#" className={styles.contactLink}>
                                <img src={whatsapp_link} alt="whatsapp_link" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.Mobile}>
                    <div className={styles.logo}>
                        <img src={logo_img} alt="logo_img" />
                    </div>
                    <div className={styles.hamburger_lines}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
