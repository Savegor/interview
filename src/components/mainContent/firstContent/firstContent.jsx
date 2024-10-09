import React from 'react';
import styles from "./firstContent.module.css"
import InfoProduct from '../infoProduct/infoProduct';

const FirstContent = () => {
    return (
        <section className={styles.firstContent}>
            <div className="container">
                <div className={styles.content}>
                    <h1>автомобиль вашей мечты здесь</h1>
                    <p>Прозрачное ценообразование с подробным разъяснением затрат на каждом этапе</p>
                    <button className='button'>Рассчитать стоимость</button>
                </div>
            </div>
            <InfoProduct/>
        </section>
    );
}

export default FirstContent;
