import React from 'react';
import styles from './carouselContent.module.css'
import Carousel from './carousel';

const CarouselContent = () => {
    
    return (
        <section className={styles.carouselContent}>
            <Carousel/>
            {/* <Carousel/>
            <Carousel/> */}
        </section>
    );
}

export default CarouselContent;
