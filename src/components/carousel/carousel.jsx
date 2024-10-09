import React, { useState } from 'react';
import styles from './carousel.module.css'
import Card from './card';
import img from '../../assets/images/carousel/img2.jpg'
import flagImg from '../../assets/images/carousel/Flag South Korea.svg'

const data = [
    {
        id: 1,
        img: img,
        nameCar: "Subaru LEVORG VN5",
        mileage: "2021 • Гибрит • 10 000 км",
        price: "2 115 600 ₽",
        active: false,
        next: false,
        prev: false
    },
    {
        id: 2,
        img: img,
        nameCar: "Subaru LEVORG VN5",
        mileage: "2022 • Гибрит • 10 000 км",
        price: "2 115 600 ₽",
        active: false,
        next: false,
        prev: false
    },
    {
        id: 3,
        img: img,
        nameCar: "Subaru LEVORG VN5",
        mileage: "2023 • Гибрит • 10 000 км",
        price: "2 115 600 ₽",
        active: false,
        next: false,
        prev: false
    },
    {
        id: 4,
        img: img,
        nameCar: "Subaru LEVORG VN5",
        mileage: "2024 • Гибрит • 10 000 км",
        price: "2 115 600 ₽",
        active: false,
        next: false,
        prev: false
    },
    {
        id: 5,
        img: img,
        nameCar: "Subaru LEVORG VN5",
        mileage: "2025 • Гибрит • 10 000 км",
        price: "2 115 600 ₽",
        active: false,
        next: false,
        prev: false
    },
]

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const length = data.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? 0 : newIndex);
        let widthCard = window.getComputedStyle(document.getElementById('card')).width
        widthCard = widthCard.split('')
        widthCard.pop()
        widthCard.pop()
        const columnGapWidth = [0, 0, -Number(widthCard.join("")), -(Number(widthCard.join(""))*2) -16, -(Number(widthCard.join(""))*3) - 32] // Необходимо изменить код, чтобы при добавлении нового слайда карусель не ломалась
        document.getElementById('carouselItems').style.transform = `translateX(${columnGapWidth[index]}px)` 
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? length - 1 : newIndex);
        let widthCard = window.getComputedStyle(document.getElementById('card')).width
        widthCard = widthCard.split('')
        widthCard.pop()
        widthCard.pop()
        const columnGapWidth = Array(length).fill().map((e, i) => i * 16)
        newIndex >= length ? console.log() : document.getElementById('carouselItems').style.transform = `translateX(${-(Number(widthCard.join("")) * (index + 1)) - columnGapWidth[index]}px)`
    };

    let cards = data.map((card) => <div key={card.id}>
        <Card id={card.id} img={card.img} nameCar={card.nameCar} mileage={card.mileage} price={card.price} active={card.active} prev={card.prev} next={card.next}
        handleNext={handleNext} handlePrevious={handlePrevious}/>
    </div>)
    data.map((e) => { 
        e.active = false 
        e.prev = false
        e.next = false
    })
    data[index - 1] ? data[index - 1].prev = true : data[0].prev = true
    data[index].active = true
    data[index + 1] ? data[index + 1].next = true : data[1].next = true
    return (
        <div className={styles.carousel}>
            <div className='container'>
                <div className={styles.carouselInfo}>
                    <div className={styles.carouselTitle}>
                        <h2 style={{ color: 'rgba(100%, 100%, 100%, 0.3)' }}>Популярные авто</h2>
                        <div className={styles.carouselTitleFrom}>
                            <h2 style={{ color: '#FD554B' }}>Из Кореи</h2>
                            <img src={flagImg} alt="flagImg" />
                        </div>
                    </div>
                    <div className={styles.carouselBtns}>
                        <button className={styles.btnPrev} onClick={handlePrevious}>
                            <svg width="55" height="13" viewBox="0 0 55 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.182324 6.30746L5.80732 0.68246C5.9246 0.565185 6.08366 0.4993 6.24951 0.4993C6.41536 0.4993 6.57443 0.565185 6.6917 0.68246C6.80898 0.799736 6.87486 0.958795 6.87486 1.12465C6.87486 1.2905 6.80898 1.44956 6.6917 1.56683L2.13311 6.12465L54.3745 6.12465C54.5403 6.12465 54.6992 6.1905 54.8165 6.30771C54.9337 6.42492 54.9995 6.58389 54.9995 6.74965C54.9995 6.91541 54.9337 7.07438 54.8165 7.19159C54.6992 7.3088 54.5403 7.37465 54.3745 7.37465L2.13311 7.37465L6.6917 11.9325C6.80898 12.0497 6.87486 12.2088 6.87486 12.3746C6.87486 12.5405 6.80898 12.6996 6.6917 12.8168C6.57442 12.9341 6.41536 13 6.24951 13C6.08366 13 5.9246 12.9341 5.80732 12.8168L0.182324 7.19184C0.124215 7.13379 0.0781141 7.06486 0.0466619 6.98899C0.0152097 6.91311 -0.000979838 6.83178 -0.000979831 6.74965C-0.000979824 6.66751 0.0152098 6.58618 0.0466619 6.51031C0.0781141 6.43444 0.124215 6.36551 0.182324 6.30746Z" fill="white" fillOpacity="0.5" />
                            </svg>
                        </button>
                        <button className={styles.btnNext} onClick={handleNext}>
                            <svg width="55" height="13" viewBox="0 0 55 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.8167 7.1918L49.1917 12.8168C49.0744 12.9341 48.9154 13 48.7495 13C48.5837 13 48.4246 12.9341 48.3073 12.8168C48.19 12.6995 48.1242 12.5405 48.1242 12.3746C48.1242 12.2088 48.19 12.0497 48.3073 11.9324L52.8659 7.37462H0.624512C0.458751 7.37462 0.299781 7.30877 0.18257 7.19156C0.0653602 7.07435 -0.000488281 6.91538 -0.000488281 6.74962C-0.000488281 6.58385 0.0653602 6.42488 0.18257 6.30767C0.299781 6.19046 0.458751 6.12462 0.624512 6.12462H52.8659L48.3073 1.5668C48.19 1.44953 48.1242 1.29047 48.1242 1.12462C48.1242 0.958763 48.19 0.799703 48.3073 0.682428C48.4246 0.565152 48.5837 0.499268 48.7495 0.499268C48.9154 0.499268 49.0744 0.565152 49.1917 0.682428L54.8167 6.30743C54.8748 6.36547 54.9209 6.4344 54.9524 6.51028C54.9838 6.58615 55 6.66748 55 6.74962C55 6.83175 54.9838 6.91308 54.9524 6.98895C54.9209 7.06483 54.8748 7.13376 54.8167 7.1918Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id='carouselItems' className={styles.carouselItems}>
                    {cards}
                </div>
            </div>
        </div>
    );
};


export default Carousel;
