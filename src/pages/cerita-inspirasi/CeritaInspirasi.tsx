import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, MessageSquare, ArrowRight, Quote } from 'lucide-react';
import InspirasiMark from '@/assets/inspirasi.svg?react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

type Story = {
  id: number;
  date: string;
  comments: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
};

const stories: Story[] = [
  {
    id: 1,
    date: '25 July 2020',
    comments: 0,
    title: 'Menjadi Inklusi di Era Limitasi, Mungkinkah?',
    excerpt:
      'Tantangan dan peluang dalam mewujudkan pendidikan inklusif di tengah keterbatasan sumber daya dan situasi pandemi.',
    image: '/activities/14.webp',
    category: 'Opini',
  },
  {
    id: 2,
    date: '9 May 2020',
    comments: 0,
    title: 'Pemimpin Menginspirasi #1 – Nunung Maryani',
    excerpt:
      'Kisah inspiratif Nunung Maryani dalam memimpin perubahan di sekolahnya dan memberikan dampak positif bagi siswa.',
    image: '/activities/15.webp',
    category: 'Sosok',
  },
  {
    id: 3,
    date: '29 March 2023',
    comments: 0,
    title: 'Webinar FKP × INSPIRASI Foundation: Mendukung Perempuan sebagai Pemimpin',
    excerpt:
      'Diskusi mendalam mengenai peran penting perempuan dalam kepemimpinan pendidikan dan tantangan yang dihadapi.',
    image: '/activities/16.webp',
    category: 'Event',
  },
  {
    id: 4,
    date: '20 February 2023',
    comments: 0,
    title: 'Tingkatkan Literasi dan Numerasi Siswa, INSPIRASI dan Pemkab Sumba Barat Daya',
    excerpt:
      'Kolaborasi strategis untuk meningkatkan kualitas literasi dan numerasi siswa di Sumba Barat Daya melalui program BERSAMA.',
    image: '/activities/17.webp',
    category: 'Program',
  },
  {
    id: 5,
    date: '15 January 2023',
    comments: 2,
    title: 'Transformasi Pendidikan di Daerah 3T',
    excerpt: 'Upaya berkelanjutan dalam memeratakan kualitas pendidikan di daerah Terdepan, Terluar, dan Tertinggal.',
    image: '/activities/18.webp',
    category: 'Liputan',
  },
  {
    id: 6,
    date: '10 December 2022',
    comments: 5,
    title: 'Peran Kepala Sekolah dalam Kurikulum Merdeka',
    excerpt: 'Bagaimana kepala sekolah menjadi kunci sukses implementasi Kurikulum Merdeka di satuan pendidikan.',
    image: '/activities/19.webp',
    category: 'Edukasi',
  },
];

export default function CeritaInspirasi() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.story-card');

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.fromTo(
        '.hero-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/activities/10.webp"
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
              <Badge variant="secondary">Cerita</Badge>
              <Badge variant="outline" className="border-background/25 text-background/80">
                Berita & Artikel
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-background md:text-6xl">Cerita Inspiratif</h1>

            <p className="text-base leading-relaxed text-background/85 md:text-lg">
              Kumpulan kisah, berita, dan artikel inspiratif seputar dunia pendidikan dan kepemimpinan sekolah dari
              berbagai penjuru Indonesia.
            </p>

            <div className="flex items-start gap-3 rounded-lg bg-background/10 p-4 text-background/85 ring-1 ring-background/15 md:max-w-xl">
              <Quote className="mt-0.5 size-5 shrink-0" />
              <p className="text-sm md:text-base">"Berbagi cerita, menginspirasi perubahan nyata."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="story-card group flex flex-col overflow-hidden border-border/50 bg-card transition-all hover:shadow-lg cursor-pointer"
              onClick={() => {
                navigate('/development');
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <Badge className="absolute left-4 top-4 bg-primary/90 hover:bg-primary">{story.category}</Badge>
              </div>

              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" />
                    <span>{story.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="size-3.5" />
                    <span>{story.comments === 0 ? 'No Comments' : `${story.comments} Comments`}</span>
                  </div>
                </div>
                <h3 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight transition-all group-hover:text-primary">
                  {story.title}
                </h3>
              </CardHeader>

              <CardContent className="flex-1 pb-4">
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{story.excerpt}</p>
              </CardContent>

              <CardFooter className="pt-0">
                <Button variant="link" className="group/btn h-auto p-0 text-primary hover:no-underline cursor-pointer">
                  Read More
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
