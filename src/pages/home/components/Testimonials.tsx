import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Puput Pratama',
    role: 'Mitra Guru',
    quote:
      'Sangat bermanfaat karena bisa menambah pengetahuan kita dan menumbuhkan minat anak dalam baca tulis yang menyenangkan.',
    avatar: '/activities/3.png',
  },
  {
    name: 'Siti Atikah Trisnawati',
    role: 'Mitra Kepala Sekolah',
    quote:
      'Saya belajar dari cara tim INSPIRASI memfasilitasi workshop tersebut, seperti memberi kesempatan setiap peserta berpendapat, dan juga menggunakan metode partisipatif saat diskusi.',
    avatar: '/activities/5.png',
  },
  {
    name: 'Nur Aisyah',
    role: 'Mitra Guru',
    quote: 'Pendekatan pembelajaran terasa lebih terarah, praktis, dan mudah diterapkan di sekolah.',
    avatar: '/activities/2.png',
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => {
    // Duplicate for seamless looping
    return [...testimonials, ...testimonials, ...testimonials];
  }, []);

  const [index, setIndex] = useState(0);
  const stepRef = useRef(0);

  const measure = () => {
    const card = cardRef.current;
    const track = trackRef.current;
    if (!card || !track) return;

    const cardWidth = card.getBoundingClientRect().width;
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;

    stepRef.current = cardWidth + gap;
  };

  useLayoutEffect(() => {
    measure();
  }, []);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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

      tl.fromTo('[data-testimonial-kicker]', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.45 })
        .fromTo('[data-testimonial-title]', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
        .fromTo('[data-testimonial-track]', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.25');

      const firstCards = Array.from(section.querySelectorAll<HTMLElement>('[data-testimonial-card="0"]'));
      if (firstCards.length > 0) {
        tl.fromTo(
          firstCards,
          { autoAlpha: 0, y: 14, scale: 0.99 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12 },
          '-=0.45'
        );
      }
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => window.clearInterval(id);
  }, []);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const step = stepRef.current;
      if (!step) return;

      // Keep the movement bounded to avoid huge x values over time
      const wrapAt = testimonials.length;
      const wrapped = index % wrapAt;

      gsap.to(track, {
        x: -(wrapped * step),
        duration: 0.9,
        ease: 'power3.inOut',
      });
    },
    { dependencies: [index] }
  );

  return (
    <section ref={sectionRef} className="w-full bg-muted/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:px-6 lg:grid-cols-[360px_1fr] lg:gap-14 lg:py-24">
        <div className="space-y-3">
          <p data-testimonial-kicker className="text-primary text-sm font-semibold tracking-wide">
            Testimonial
          </p>
          <h2 data-testimonial-title className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Apa Kata Mitra Tentang
            <br />
            INSPIRASI?
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-muted/40 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-muted/40 to-transparent"
          />

          <div ref={trackRef} data-testimonial-track className="flex gap-6 will-change-transform p-4">
            {items.map((t, i) => (
              <div
                key={`${t.name}-${t.role}-${i}`}
                ref={i === 0 ? cardRef : undefined}
                data-testimonial-card={i < testimonials.length ? '0' : '1'}
                className="max-w-full w-full shrink-0 rounded-2xl bg-background p-6 ring-1 ring-border shadow-md"
              >
                <p className="text-muted-foreground text-sm leading-relaxed">{t.quote}</p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt=""
                    aria-hidden="true"
                    className="size-10 rounded-full object-cover ring-1 ring-border"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-foreground text-sm font-semibold">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
