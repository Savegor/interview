import React from 'react';
import styles from './card.module.css'

const Card = (props) => {
    return (
        <div>
            {props.active ? <div className={styles.card}>
                <img src={props.img} alt="card_img" />
                <div className={styles.info}>
                    <div className={styles.infoTop}>
                        <h2 className={styles.nameCar}>{props.nameCar}</h2>
                        <div className={styles.mileage}>{props.mileage}</div>
                    </div>
                    <div className={styles.infoBottom}>
                        <h2 className={styles.price}>{props.price}</h2>
                        <button className={styles.btn}>Оставить заявку</button>
                    </div>
                </div>
            </div>
                : <div className={styles.cardNoActive} id='card' onClick={props.prev ? props.handlePrevious : props.next ? props.handleNext : console.log()}>
                    <div className={styles.info}>
                        <div className={styles.infoTop}>
                            <h2 className={styles.nameCar}>{props.nameCar}</h2>
                            <div className={styles.mileage}>{props.mileage}</div>
                        </div>
                        <img src={props.img} alt="card_img" />
                        <div className={styles.infoBottomNoActive}>
                            <h2 className={styles.priceNoActive}>{props.price}</h2>
                            <button className={styles.btn}>Оставить заявку</button>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Card;
