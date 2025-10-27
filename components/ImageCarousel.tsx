'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenIndex, setFullScreenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextFullScreen = () => {
    setFullScreenIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevFullScreen = () => {
    setFullScreenIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openFullScreen = (index: number) => {
    setFullScreenIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  const visibleImages = isMobile
    ? [images[currentIndex]]
    : [
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
      ];

  const visibleIndices = isMobile
    ? [currentIndex]
    : [
        (currentIndex - 1 + images.length) % images.length,
        currentIndex,
        (currentIndex + 1) % images.length,
      ];

  return (
    <>
      <div className="relative w-full mt-6 px-2 sm:px-0">
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={prevSlide}
            className="z-10 p-1.5 sm:p-2 md:p-2.5 rounded-full transition-all hover:scale-110 flex-shrink-0"
            style={{ backgroundColor: '#f59e0b', color: 'white' }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-hidden justify-center flex-1 max-w-[250px] sm:max-w-[400px] md:max-w-[600px]">
            {visibleImages.map((img, idx) => {
              const actualIndex = visibleIndices[idx];
              const isCenter = isMobile ? true : idx === 1;

              let width, height;
              if (isMobile) {
                width = '180px';
                height = '135px';
              } else {
                width = isCenter ? '200px' : '150px';
                height = isCenter ? '150px' : '112px';
              }

              return (
                <div
                  key={`${img}-${idx}`}
                  className={`relative transition-all duration-300 cursor-pointer ${
                    isCenter ? 'scale-100 opacity-100' : 'scale-75 opacity-50 hidden sm:block'
                  }`}
                  style={{
                    width,
                    height,
                  }}
                  onClick={() => openFullScreen(actualIndex)}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={img}
                      alt={`Carousel image ${actualIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 180px, 200px"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="z-10 p-1.5 sm:p-2 md:p-2.5 rounded-full transition-all hover:scale-110 flex-shrink-0"
            style={{ backgroundColor: '#f59e0b', color: 'white' }}
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-6 sm:w-8' : 'w-2'
              }`}
              style={{
                backgroundColor: index === currentIndex ? '#f59e0b' : '#1E4F8F40',
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={closeFullScreen}
        >
          <button
            onClick={closeFullScreen}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50 p-2 sm:p-2.5 md:p-3 rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: '#f59e0b', color: 'white' }}
            aria-label="Close fullscreen"
          >
            <X className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevFullScreen();
            }}
            className="absolute left-2 sm:left-4 md:left-6 z-50 p-2 sm:p-2.5 md:p-3 rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: '#f59e0b', color: 'white' }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <div
            className="relative w-full h-full max-w-[95vw] max-h-[85vh] sm:max-w-[90vw] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: 'none',
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                boxShadow: '0 0 20px 5px rgba(245, 158, 11, 0.6), 0 0 40px 10px rgba(245, 158, 11, 0.4)',
                border: '3px solid #f59e0b',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={images[fullScreenIndex]}
                alt={`Fullscreen image ${fullScreenIndex + 1}`}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextFullScreen();
            }}
            className="absolute right-2 sm:right-4 md:right-6 z-50 p-2 sm:p-2.5 md:p-3 rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: '#f59e0b', color: 'white' }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm sm:text-base md:text-lg font-semibold bg-black/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
            {fullScreenIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
