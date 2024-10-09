import React from 'react';
import "./mainContent.css"
import FirstContent from './firstContent/firstContent';
import InfoProduct from './infoProduct/infoProduct';
import CarouselContent from '../carousel/carouselContent';
import Contact from '../contact/contact';

const MainContent = () => {
    return (
        <main className='MainContent'>
            <FirstContent/>
            <CarouselContent/>
            <Contact/>
        </main>
    );
}

export default MainContent;
