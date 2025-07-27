'use client';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useRef, useState } from 'react';

export default function SlideShow() {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  const slideImages = [
    { url: 'images/pinkSky.jpeg', caption: 'Slide 1' },
    { url: 'images/payroll.jpeg', caption: 'Slide 2' },
    { url: 'images/techdoc.jpeg', caption: 'Slide 3' },
    { url: 'images/posh.png', caption: 'Slide 4' },
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    autoplay: true,
    indicators: false,
    onChange: (oldIndex, newIndex) => setCurrent(newIndex),
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    height: '400px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="slide-container w-full">
      <Slide ref={slideRef} {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            />
          </div>
        ))}
      </Slide>

      {/* Custom Tailwind Dots */}
      <div className="flex justify-center mt-1 space-x-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => (
              setCurrent((index)),
              slideRef.current.goTo(index)
            )}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-orange-500 scale-110' : 'bg-orange-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
