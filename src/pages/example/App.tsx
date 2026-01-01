import { ComponentExample } from '@/components/component-example';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const Nested = () => {
    const box = useRef<HTMLDivElement | null>(null);

    useGSAP(
      () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-scroll-item]');

        items.forEach((item) => {
          gsap.fromTo(
            item,
            { y: -400 },
            {
              y: 0,
              duration: 1,
              ease: 'elastic.out',
              scrollTrigger: {
                trigger: item,
                markers: true,
                start: 'top center',
                toggleActions: 'restart none none none',
              },
            }
          );
        });
      },
      { scope: box }
    );

    return (
      <div ref={box}>
        <div data-scroll-item>
          <ComponentExample />
        </div>
        <div data-scroll-item>
          <ComponentExample />
        </div>
        <div data-scroll-item>
          <ComponentExample />
        </div>
      </div>
    );
  };
  return <Nested />;
}

export default App;
