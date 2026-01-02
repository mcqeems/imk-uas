import { useEffect, useState, useRef } from 'react';
import Inspirasi from '@/assets/inspirasi.svg?react';
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
  const imageGalleryRef = useRef<HTMLDivElement | null>(null);

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

    const inspirasiSvg = container.querySelector<SVGSVGElement>('#inspirasi svg');
    const foundationSvg = container.querySelector<SVGSVGElement>('#foundation svg');

    const inspirasiPaths = getSortedPaths(inspirasiSvg);
    const foundationPaths = getSortedPaths(foundationSvg);

    const allPaths = [...inspirasiPaths, ...foundationPaths];
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
        toggleActions: 'play pause resume none',
      },
    });

    tl.set(allPaths, { strokeOpacity: 1 }, 0)
      .to(
        inspirasiPaths,
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
      scrollTrigger: {
        trigger: subText,
        start: 'top 80%',
        toggleActions: 'play pause resume none',
      },
    });
  });

  useGSAP(
    () => {
      const gallery = imageGalleryRef.current;
      if (!gallery) return;

      const addHoverAnimation = (el: HTMLElement) => {
        const onEnter = () => {
          gsap.to(el, {
            scale: 1.05,
            rotation: 4,
            duration: 0.8,
            ease: 'elastic.out(1, 0.4)',
            transformOrigin: 'center',
          });
        };

        const onLeave = () => {
          gsap.to(el, {
            scale: 1,
            rotation: 0,
            duration: 0.7,
            ease: 'elastic.out(1, 0.4)',
            transformOrigin: 'center',
          });
        };

        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);

        return () => {
          gsap.killTweensOf(el);
        };
      };

      const cleanups: Array<() => void> = [];

      const imgOne = gallery.querySelector<HTMLElement>('#image-gallery-1');
      if (!imgOne) return;
      cleanups.push(addHoverAnimation(imgOne));
      gsap.from(imgOne, {
        x: -200,
        duration: 2,
        ease: 'elastic.out',
        opacity: 0,
        rotation: 75,
        delay: 2.7,
        scale: 0.9,
        scrollTrigger: {
          trigger: gallery,
          start: 'top 80%',
          toggleActions: 'play pause resume none',
        },
      });

      const imgTwo = gallery.querySelector<HTMLElement>('#image-gallery-2');
      if (!imgTwo) return;
      cleanups.push(addHoverAnimation(imgTwo));
      gsap.from(imgTwo, {
        y: 300,
        x: -300,
        duration: 2,
        ease: 'elastic.out',
        opacity: 0,
        rotation: 75,
        delay: 4.2,
        scale: 0.9,
        scrollTrigger: {
          trigger: gallery,
          start: 'top 80%',
          toggleActions: 'play pause resume none',
        },
      });

      const imgThree = gallery.querySelector<HTMLElement>('#image-gallery-3');
      if (!imgThree) return;
      cleanups.push(addHoverAnimation(imgThree));
      gsap.from(imgThree, {
        y: 300,
        x: -300,
        duration: 2,
        ease: 'elastic.out',
        opacity: 0,
        rotation: 75,
        delay: 3.2,
        scale: 0.9,
        scrollTrigger: {
          trigger: gallery,
          start: 'top 80%',
          toggleActions: 'play pause resume none',
        },
      });

      const imgFour = gallery.querySelector<HTMLElement>('#image-gallery-4');
      if (!imgFour) return;
      cleanups.push(addHoverAnimation(imgFour));
      gsap.from(imgFour, {
        y: -300,
        x: 300,
        duration: 2,
        ease: 'elastic.out',
        opacity: 0,
        rotation: 75,
        delay: 4.7,
        scale: 0.9,
        scrollTrigger: {
          trigger: gallery,
          start: 'top 80%',
          toggleActions: 'play pause resume none',
        },
      });

      const imgFive = gallery.querySelector<HTMLElement>('#image-gallery-5');
      if (!imgFive) return;
      cleanups.push(addHoverAnimation(imgFive));
      gsap.from(imgFive, {
        x: 200,
        duration: 2,
        ease: 'elastic.out',
        opacity: 0,
        rotation: 75,
        delay: 3.7,
        scale: 0.9,
        scrollTrigger: {
          trigger: gallery,
          start: 'top 80%',
          toggleActions: 'play pause resume none',
        },
      });

      const imgSix = gallery.querySelector<HTMLElement>('#image-gallery-6');
      if (!imgSix) return;
      cleanups.push(addHoverAnimation(imgSix));
      gsap.from(imgSix, {
        y: -300,
        x: -300,
        duration: 2,
        ease: 'elastic.out',
        opacity: 0,
        rotation: 75,
        delay: 5.2,
        scale: 0.9,
        scrollTrigger: {
          trigger: gallery,
          start: 'top 80%',
          toggleActions: 'play pause resume none',
        },
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: imageGalleryRef }
  );

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

      <div className="absolute inset-0 z-0 bg-linear-to-t from-black/45 to-black/85"></div>

      <div ref={imageGalleryRef} className="absolute inset-0 z-10 hidden lg:block">
        {/* Kiri Atas */}
        <img
          src="/activities/3.png"
          alt="activities_1"
          aria-hidden="true"
          id="image-gallery-1"
          className="absolute lg:left-24 lg:top-24 xl:left-40 xl:top-40 lg:h-48 lg:w-48 xl:h-64 xl:w-64 rounded-lg object-cover shadow-lg"
        />
        <img
          src="/activities/2.png"
          alt="activities_2"
          aria-hidden="true"
          id="image-gallery-2"
          className="absolute lg:left-64 lg:top-16 xl:left-90 xl:top-25 lg:h-16 lg:w-16 xl:h-25 xl:w-25 rounded-lg object-cover shadow-lg"
        />
        {/* Kiri Bawah */}
        <img
          src="/activities/6.jpg"
          alt="activities_3"
          aria-hidden="true"
          id="image-gallery-3"
          className="absolute lg:bottom-24 lg:left-24 xl:bottom-46 xl:left-60 lg:h-56 lg:w-72 xl:h-76 xl:w-96 rounded-lg object-cover shadow-lg"
        />
        <img
          src="/activities/4.png"
          alt="activities_4"
          aria-hidden="true"
          id="image-gallery-4"
          className="absolute lg:bottom-24 lg:left-96 xl:bottom-35 xl:left-150 lg:h-16 lg:w-16 xl:h-25 xl:w-25 -translate-x-1/2 rounded-lg object-cover shadow-lg"
        />
        {/* Kanan */}
        <img
          src="/activities/5.png"
          alt="activities_5"
          aria-hidden="true"
          id="image-gallery-5"
          className="absolute lg:right-16 lg:top-24 xl:right-36 xl:top-40 lg:h-80 lg:w-80 xl:h-115 xl:w-115 rounded-lg object-cover shadow-lg"
        />
        <img
          src="/activities/1.png"
          alt="activities_6"
          aria-hidden="true"
          id="image-gallery-6"
          className="absolute lg:bottom-40 lg:right-24 xl:bottom-65 xl:right-135 lg:h-20 lg:w-20 xl:h-28 xl:w-28 rounded-lg object-cover shadow-lg"
        />
      </div>

      <div
        id="hero-inside"
        className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-6"
      >
        <div ref={textHeaderRef} className="flex flex-col lg:flex-row gap-4">
          <div id="inspirasi">
            <Inspirasi className="text-background block lg:h-32 h-24 w-full overflow-visible" />
          </div>
          <div id="foundation">
            <Foundation className="text-background block lg:h-32 h-24 w-full overflow-visible" />
          </div>
        </div>
        <div ref={subTextHeaderRef}>
          <p className="text-background font-bold md:text-lg text-base text-center">
            Solusi Kepemimpinan Sekolah yang Inovatif dan Berdampak.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
