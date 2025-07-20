'use client';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState } from 'react';

export default function SlideShow() {
  const [current, setCurrent] = useState(0);

  const slideImages = [
    { url: 'images/img1.jpeg', caption: 'Slide 1' },
    { url: 'images/img2.jpeg', caption: 'Slide 2' },
    { url: 'images/img3.jpeg', caption: 'Slide 3' },
    { url: 'images/img4.jpeg', caption: 'Slide 4' },
    { url: 'images/img5.jpeg', caption: 'Slide 5' },
    { url: 'images/img6.jpeg', caption: 'Slide 6' },
    { url: 'images/img7.jpeg', caption: 'Slide 7' },


  ];

  const properties = {
    duration: 3000,
    transitionDuration: 5,
    infinite: true,
    autoplay: true,
    indicators: false,
    onChange: (oldIndex, newIndex) => setCurrent(newIndex),
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain', // or 'cover'
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    width: '100%',
};


  return (
    <div className="slide-container w-full">
      <Slide {...properties}>
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-orange-500 scale-110' : 'bg-orange-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
