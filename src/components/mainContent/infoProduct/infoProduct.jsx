import React from 'react';
import styles from './infoProduct.module.css'
import star_img from '../../../assets/images/content/star.png'

const InfoProduct = () => {
    return (
        <div className={styles.infoProduct}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={styles.item}>
                            <h2>5+</h2>
                            <p>Лет на рынке</p>
                        </div>
                        <div className={styles.item}>
                            <h2>4 000 +</h2>
                            <p>довольных клиентов</p>
                        </div>
                        <div className={styles.item}>
                            <h2><img src={star_img} alt="star_img" />4.9</h2>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <div>Экономия до <p>30%</p> от рынка авто в наличии</div>
                        <button className='button'>Смотреть пример</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoProduct;
