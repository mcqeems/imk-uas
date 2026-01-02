import { useRef } from 'react';
import { GraduationCap, FlaskConical, Network } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

type Feature = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  { title: 'Pelatihan Kepala Sekolah', icon: GraduationCap },
  { title: 'Penelitian & Uji Coba', icon: FlaskConical },
  { title: 'Membangun Ekosistem', icon: Network },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo('[data-wwd-kicker]', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.45 })
        .fromTo('[data-wwd-title]', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.15')
        .fromTo('[data-wwd-body]', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.35')
        .fromTo(
          '[data-wwd-item]',
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.12 },
          '-=0.35'
        )
        .fromTo(
          '[data-wwd-deco-left]',
          { autoAlpha: 0, x: -24, y: -8, scale: 0.96 },
          { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.25'
        )
        .fromTo(
          '[data-wwd-deco-right]',
          { autoAlpha: 0, x: 24, y: 8, scale: 0.96 },
          { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '[data-wwd-image]',
          { autoAlpha: 0, y: 18, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out' },
          '-=0.55'
        )
        .call(() => {
          const rand = gsap.utils.random;

          const leftDeco = section.querySelector<HTMLElement>('[data-wwd-deco-left]');
          const rightDeco = section.querySelector<HTMLElement>('[data-wwd-deco-right]');

          const floatIt = (el: HTMLElement | null, biasX: number) => {
            if (!el) return;
            gsap.to(el, {
              x: () => rand(-10 + biasX, 10 + biasX),
              y: () => rand(-10, 10),
              rotation: () => rand(-3, 3),
              duration: () => rand(2.6, 4.2),
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              repeatRefresh: true,
            });
          };

          floatIt(leftDeco, 2);
          floatIt(rightDeco, -2);
        });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="space-y-5">
          <p data-wwd-kicker className="text-primary text-sm font-semibold tracking-wide">
            Tentang INSPIRASI
          </p>

          <h2 data-wwd-title className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            What We Do
          </h2>

          <p data-wwd-body className="text-muted-foreground leading-relaxed">
            INSPIRASI menjadi bagian dari jejaring Global School Leaders (GSL), yang berfokus pada peningkatan kualitas
            kepemimpinan pendidikan. INSPIRASI berupaya menghadirkan program yang mendukung para pemimpin sekolah dalam
            mengembangkan profesinya sebagai kepala sekolah, melalui:
          </p>

          <div className="space-y-3 pt-2">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-wwd-item
                  className={cn('flex items-center gap-3 rounded-lg px-2 py-2', 'transition-colors hover:bg-muted/60')}
                >
                  <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-md">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="text-foreground font-semibold">{item.title}</div>
                </div>
              );
            })}
            <Button
              data-wwd-item
              className="max-w-full w-[50%] py-5 mr-2 font-bold cursor-pointer"
              onClick={(event) => {
                event.preventDefault();
                navigate('/program');
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-4/3 w-full">
            <img
              data-wwd-image
              src="/activities/5.png"
              alt="Kegiatan Inspirasi"
              className="absolute right-0 top-0 h-[78%] w-[78%] rounded-xl object-cover ring-1 ring-border shadow-lg"
              loading="lazy"
            />

            <img
              data-wwd-image
              src="/activities/6.jpg"
              alt="Kegiatan sekolah"
              className="absolute bottom-0 left-0 h-[44%] w-[58%] rounded-xl object-cover ring-1 ring-border shadow-lg"
              loading="lazy"
            />

            <img
              data-wwd-image
              src="/activities/2.png"
              alt="Pelatihan dan kolaborasi"
              className="absolute bottom-[-10%] right-[35%] h-16 w-16 rounded-lg object-cover ring-1 ring-border shadow-md sm:h-20 sm:w-20"
              loading="lazy"
            />

            <div
              data-wwd-deco-left
              aria-hidden="true"
              className="bg-primary/10 absolute -left-4 -top-4 size-24 rounded-2xl"
            />
            <div
              data-wwd-deco-right
              aria-hidden="true"
              className="bg-primary/10 absolute -right-4 -bottom-4 size-20 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
