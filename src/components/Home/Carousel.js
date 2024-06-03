import React, { useState } from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="min-w-full">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-white p-2 rounded-full shadow"
                onClick={previousSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-white p-2 rounded-full shadow"
                onClick={nextSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>

        </div>
    );
};

export default Carousel;
