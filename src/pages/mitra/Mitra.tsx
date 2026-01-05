import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';
import InspirasiMark from '@/assets/inspirasi.svg?react';
import mitraData from '../home/data/mitra.json';

gsap.registerPlugin(ScrollTrigger);

interface MitraType {
  name: string;
  description: string;
  type: string;
  image: string;
}

export default function Mitra() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Group mitras by type
  const groupedMitras = mitraData.reduce((acc, mitra) => {
    if (!acc[mitra.type]) {
      acc[mitra.type] = [];
    }
    acc[mitra.type].push(mitra);
    return acc;
  }, {} as Record<string, MitraType[]>);

  useGSAP(
    () => {
      // Hero Animation
      gsap.fromTo(
        '.hero-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      // Sections Animation
      Object.keys(groupedMitras).forEach((type) => {
        gsap.fromTo(
          `.section-${type.replace(/\s+/g, '-')}`,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: `.section-${type.replace(/\s+/g, '-')}`,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/activities/12.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/70" aria-hidden="true" />
        </div>

        <div className="absolute right-0 top-0 -z-10 h-full w-full overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 top-10 hidden md:block">
            <InspirasiMark className="h-80 w-80 text-background/10" />
          </div>
          <div className="absolute -right-16 top-56 hidden lg:block">
            <InspirasiMark className="h-64 w-64 text-background/7" />
          </div>
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        <div className="mx-auto flex min-h-[56vh] w-full max-w-7xl items-center px-4 py-16 md:min-h-[64vh] md:py-24">
          <div className="hero-content max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Jejaring</Badge>
              <Badge variant="outline" className="border-background/25 text-background/80">
                Kolaborasi & Sinergi
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-background md:text-6xl">Mitra Inspirasi</h1>

            <p className="text-base leading-relaxed text-background/85 md:text-lg">
              Kami percaya bahwa perubahan besar dimulai dari kolaborasi. Bersama mitra-mitra hebat, kami bergerak
              mewujudkan pendidikan Indonesia yang lebih baik.
            </p>

            <div className="flex items-start gap-3 rounded-lg bg-background/10 p-4 text-background/85 ring-1 ring-background/15 md:max-w-xl">
              <Quote className="mt-0.5 size-5 shrink-0" />
              <p className="text-sm md:text-base">"Gotong royong untuk masa depan pendidikan bangsa."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitra Grid Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 space-y-20">
        {Object.entries(groupedMitras).map(([type, items]) => (
          <section key={type} className={`section-${type.replace(/\s+/g, '-')} space-y-8`}>
            <div className="flex items-center gap-4">
              <div className="h-8 w-1.5 bg-primary rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{type}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {items.map((mitra) => (
                <div
                  key={mitra.name}
                  className="group flex flex-col items-center justify-between rounded-xl border border-border/50 bg-card p-8 transition-all hover:shadow-lg hover:border-primary/20"
                >
                  <div className="h-32 w-full flex items-center justify-center mb-6 p-4 bg-white rounded-lg">
                    <img
                      src={`/mitra/${mitra.image}`}
                      alt={mitra.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center space-y-3 w-full">
                    <h3 className="font-bold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                      {mitra.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{mitra.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
