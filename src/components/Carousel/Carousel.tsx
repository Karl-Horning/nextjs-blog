import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import CarouselSlide from "./CarouselSlide";

interface Slide {
    src: string;
    alt: string;
}

interface CarouselProps {
    slides: Slide[];
}

const slideInterval = 6000;

export default function Carousel({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const totalSlides: number = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
            );
        }, slideInterval);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const showSlide = (index: number): void => {
        setCurrentIndex(index);
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <CarouselSlide
                        key={index}
                        src={slide.src}
                        alt={slide.alt}
                    />
                ))}
            </div>
            <ButtonGroup>
                {slides.map((_, index) => (
                    <Button
                        key={index}
                        onClick={() => showSlide(index)}
                        className={
                            currentIndex === index
                                ? "bg-blue-600 text-white"
                                : ""
                        }
                    >
                        {index + 1}
                    </Button>
                ))}
            </ButtonGroup>

            <ButtonGroup>
                <Button className="prev" onClick={prevSlide}>
                    Previous
                </Button>
                <Button className="next" onClick={nextSlide}>
                    Next
                </Button>
            </ButtonGroup>
        </div>
    );
}
