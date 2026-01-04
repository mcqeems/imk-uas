import mitraData from '../data/mitra.json';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface MitraTypes {
  name: string;
  description: string;
  type: string;
  image: string;
}

function Mitra() {
  const mitras: MitraTypes[] = mitraData;
  const mitraRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-mitra-title]',
        {
          autoAlpha: 0,
          x: -100,
        },
        {
          autoAlpha: 1,
          x: 0,
          ease: 'power3.out',
          duration: 0.2,
          scrollTrigger: {
            trigger: '[data-mitra-title]',
            start: 'top center',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '[data-mitra-item]',
        {
          autoAlpha: 0,
          y: -100,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'power3.out',
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '[data-mitra-item]',
            start: 'top center',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: mitraRef }
  );
  return (
    <section ref={mitraRef} className="flex flex-col justify-center items-center w-full px-2 py-4 gap-4">
      <div className="max-w-full w-full">
        <h2 data-mitra-title className="text-3xl font-bold text-center">
          Mitra Inspirasi
        </h2>
      </div>
      <div className="grid grid-cols-3 w-full max-w-6xl gap-8 mt-4">
        {mitras.slice(0, 9).map((mitra) => {
          return (
            <div
              key={mitra.name}
              data-mitra-item
              className="flex flex-col items-center min-h-50 justify-between border border-border rounded-lg p-8"
            >
              <img height={300} width={300} className="object-contain" src={`/mitra/${mitra.image}`} />
              <p className="text-center text-sm">{mitra.description}</p>
            </div>
          );
        })}
      </div>
      <Button
        data-mitra-item
        className="px-6 py-5 font-bold"
        size="lg"
        onClick={() => {
          navigate('/mitra');
        }}
      >
        Lihat Mitra Lainnya
      </Button>
    </section>
  );
}

export default Mitra;
