import { useEffect, useState } from 'react';

import hero1 from '../assets/img/hero.jpg';
import hero2 from '../assets/img/hero2.jpg';
import hero3 from '../assets/img/hero3.jpg';

const images = [hero1, hero2, hero3];

const ImageCarousel = () => {
    const [current, setCurrent] = useState(0);
    const total = images.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2500)
        return () => clearInterval(interval)
    }, [current])

    return (
        <div className="relative w-full h-55 max-w-[83%] mx-auto rounded-2xl overflow-hidden mb-8">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0 object-cover h-64 md:h-96"
                    />
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-r hover:bg-opacity-80"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-l hover:bg-opacity-80"
            >
                ❯
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 w-2 rounded-full cursor-pointer ${idx === current ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
