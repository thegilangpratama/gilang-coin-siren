import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/atoms/carousel';
import CarouselCard from '@/components/molecules/carousel-cards';
import Box from '@/public/body/box.svg';
import Marketing from '@/public/body/marketing.svg';
import Phone from '@/public/body/phone.svg';
import Picture from '@/public/body/picture.svg';
import Target from '@/public/body/target.svg';

const cardData = [
    { icon: Marketing, text: '해외 마케팅' },
    { icon: Picture, text: '퍼블리셔' },
    { icon: Box, text: '캐드원(제도사)' },
    { icon: Target, text: '해외 세일즈' },
    { icon: Phone, text: '해외 CS' },
];

const CarouselInfo: React.FC = () => {
    return (
        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent>
                {cardData.map((card, idx) => (
                    <CarouselItem key={idx} className="md:basis-1/4 lg:basis-1/4">
                        <CarouselCard icon={card.icon} text={card.text} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default CarouselInfo;