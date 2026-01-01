import { useEffect, useState, useRef } from 'react';
import Inspiration from '@/assets/inspiration.svg?react';
import Foundation from '@/assets/foundation.svg?react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const images = ['/school/school_one.png', '/school/school_two.png', '/school/school_three.png'];
  const [activeIndex, setActiveIndex] = useState(0);
  const textHeaderRef = useRef<HTMLDivElement | null>(null);
  const subTextHeaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => window.clearInterval(id);
  }, [images.length]);

  useGSAP(() => {
    // Text Header
    const container = textHeaderRef.current;
    if (!container) return;

    const getSortedPaths = (svg: SVGSVGElement | null) => {
      if (!svg) return [] as SVGPathElement[];
      const paths = Array.from(svg.querySelectorAll<SVGPathElement>('path'));

      return paths.sort((a, b) => {
        try {
          return a.getBBox().x - b.getBBox().x;
        } catch {
          return 0;
        }
      });
    };

    const inspirationSvg = container.querySelector<SVGSVGElement>('#inspiration svg');
    const foundationSvg = container.querySelector<SVGSVGElement>('#foundation svg');

    const inspirationPaths = getSortedPaths(inspirationSvg);
    const foundationPaths = getSortedPaths(foundationSvg);

    const allPaths = [...inspirationPaths, ...foundationPaths];
    if (allPaths.length === 0) return;

    allPaths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        stroke: 'currentColor',
        fill: 'currentColor',
        fillOpacity: 0,
        strokeOpacity: 0,
        strokeDasharray: length,
        strokeDashoffset: length,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    tl.set(allPaths, { strokeOpacity: 1 }, 0)
      .to(
        inspirationPaths,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power1.inOut',
          stagger: { each: 0.01, from: 'start' },
        },
        0
      )
      .to(
        foundationPaths,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power1.inOut',
          stagger: { each: 0.01, from: 'start' },
        },
        0
      )
      .to(
        allPaths,
        {
          fillOpacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        },
        '>-0.1'
      );

    // subText Animation
    const subText = subTextHeaderRef.current;
    if (!subText) return;

    gsap.from(subText, {
      delay: 2.3,
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: 'elastic.out',
    });
  });

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
      <div id="hero-inside" className="absolute inset-0 flex flex-col gap-6 items-center justify-center">
        <div ref={textHeaderRef} className="flex flex-col lg:flex-row gap-4">
          <div id="inspiration">
            <Inspiration className="text-background h-32 w-full" />
          </div>
          <div id="foundation">
            <Foundation className="text-background h-32 w-full" />
          </div>
        </div>
        <div ref={subTextHeaderRef}>
          <p className="text-background font-bold text-lg">Solusi Kepemimpinan Sekolah yang Inovatif dan Berdampak.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
