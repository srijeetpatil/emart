import React, {Component, useState} from 'react';
import {Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption} from 'reactstrap';
import {carouselItems} from '../data/carouselItems';

const CarouselComponent = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    let width = window.innerWidth;
    var items = carouselItems;   

    const next = () => {
        if(animating){
            return;
        }
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

    const slides = items.map((item) => {
    const source = require('../assets/carousel/' + item.src);
    return (
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={source}
        >
            <img src={source} alt={item.altText} className="carouselImage"/>            
        </CarouselItem>
    );
    });

return (
    <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval="3000"
    >        
        {slides}        
    </Carousel>
    );
}

export default CarouselComponent;