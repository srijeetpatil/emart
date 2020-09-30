import React, {Component, useState, useEffect} from 'react';
import {Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption} from 'reactstrap';

import {baseurl} from '../data/baseurl';

const CarouselComponent = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [items, setItems] = useState([]); 

    useEffect(() => {
        setItems(props.items);     
    }, []);          

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
    const source = baseurl + item.src;
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
        interval="2500"        
    >        
        {slides} 
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />             
    </Carousel>
    );
}

export default CarouselComponent;