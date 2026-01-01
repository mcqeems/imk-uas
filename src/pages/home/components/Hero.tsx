import { useEffect, useState } from 'react';

function Hero() {
  const images = ['/school/school_one.png', '/school/school_two.png', '/school/school_three.png'];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={
            'hero-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ' +
            (index === activeIndex ? 'opacity-100' : 'opacity-0')
          }
        />
      ))}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}

export default Hero;
