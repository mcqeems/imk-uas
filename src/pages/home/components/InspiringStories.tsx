import { useRef } from 'react';
import { CalendarDays } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type Story = {
  date: string;
  title: string;
  image: string;
};

const leftStories: Story[] = [
  {
    date: '25 July 2020',
    title: 'Menjadi Inklusi di Era Limitasi, Mungkinkah?',
    image: '/activities/3.png',
  },
  {
    date: '9 May 2020',
    title: 'Pemimpin Menginspirasi #1 – Nunung Maryani',
    image: '/activities/6.jpg',
  },
];

const rightStories: Story[] = [
  {
    date: '29 March 2023',
    title: 'Webinar FKP × INSPIRASI Foundation: Mendukung Perempuan sebagai Pemimpin dalam Pendidikan',
    image: '/activities/2.png',
  },
  {
    date: '20 February 2023',
    title: 'Tingkatkan Literasi dan Numerasi Siswa, INSPIRASI dan Pemkab Sumba Barat Daya Diseminaskan Program BERSAMA',
    image: '/activities/5.png',
  },
];

function StoryRow({ story, side }: { story: Story; side: 'left' | 'right' }) {
  return (
    <div
      data-story-row
      data-story-side={side}
      className="flex gap-4 rounded-xl p-4 transition-colors hover:bg-muted/30"
    >
      <img
        src={story.image}
        alt=""
        aria-hidden="true"
        className="h-14 w-14 shrink-0 rounded-lg object-cover ring-1 ring-border"
        loading="lazy"
      />
      <div className="min-w-0">
        <div className="text-muted-foreground flex items-center gap-2 text-xs">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          <span>{story.date}</span>
        </div>
        <div className="text-foreground mt-1 line-clamp-3 text-sm font-semibold leading-snug sm:text-base">
          {story.title}
        </div>
      </div>
    </div>
  );
}

export default function InspiringStories() {
  const sectionRef = useRef<HTMLElement | null>(null);

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

      tl.fromTo('[data-stories-kicker]', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.45 })
        .fromTo('[data-stories-title]', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.65 }, '-=0.15')
        .fromTo(
          '[data-stories-card]',
          { autoAlpha: 0, y: 24, scale: 0.985 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.75 },
          '-=0.2'
        );

      const rows = gsap.utils.toArray<HTMLElement>('[data-story-row]');
      rows.forEach((row, index) => {
        const side = row.dataset.storySide;
        tl.fromTo(
          row,
          { autoAlpha: 0, y: 14, x: side === 'left' ? -18 : 18 },
          { autoAlpha: 1, y: 0, x: 0, duration: 0.5 },
          index === 0 ? '-=0.35' : '-=0.4'
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative isolate w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(/activities/6.jpg)' }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 md:px-6 lg:pt-28">
        <p data-stories-kicker className="text-background/90 text-center text-sm font-medium">
          Jadilah saksi perubahan baik dari para Mitra INSPIRASI.
        </p>
        <h2
          data-stories-title
          className="text-background mt-2 text-center text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Cerita Inspiratif
        </h2>

        <div className="relative mt-10">
          <div data-stories-card className="overflow-hidden rounded-2xl bg-background ring-1 ring-border shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-background p-2 sm:p-4">
                {leftStories.map((story) => (
                  <StoryRow key={story.title} story={story} side="left" />
                ))}
              </div>
              <div className="bg-muted/35 p-2 sm:p-4">
                {rightStories.map((story) => (
                  <StoryRow key={story.title} story={story} side="right" />
                ))}
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-24 left-1/2 -z-10 h-full w-[120%] -translate-x-1/2 bg-primary origin-top-left -skew-y-3"
          />
        </div>
      </div>
    </section>
  );
}
