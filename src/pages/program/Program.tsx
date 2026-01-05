import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Lightbulb, Users, GraduationCap, Search, Share2, Building2, FileText, Quote } from 'lucide-react';
import InspirasiMark from '@/assets/inspirasi.svg?react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

gsap.registerPlugin(ScrollTrigger);

const trainingPrograms = [
  { title: 'Pelatihan PBD dan Digitalisasi Sekolah', icon: <BookOpen className="w-5 h-5" /> },
  {
    title: 'Program Pengimbasan IKM',
    description: 'Mendukung Implementasi Kurikulum Merdeka',
    icon: <Share2 className="w-5 h-5" />,
  },
  {
    title: 'Program PKB Inspiratif',
    description: 'Pengembangan Kompetensi Berkelanjutan',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  { title: 'Program Sekolah Enuma Indonesia', icon: <Building2 className="w-5 h-5" /> },
  { title: 'Program PAUD Prestasi', icon: <Users className="w-5 h-5" /> },
  { title: 'Program BERSAMA', description: 'Berubah Bersama untuk Siswa', icon: <Users className="w-5 h-5" /> },
  {
    title: 'Program BERKUALITAS',
    description: 'Belajar Bersama Kuatkan Potensi Siswa melalui Komunitas',
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: 'Program Flagship',
    description: 'Pelatihan Kepemimpinan Pembelajaran (Program Rintisan)',
    icon: <Lightbulb className="w-5 h-5" />,
  },
];

const researchPrograms = [
  {
    title: 'Program AKSELERASI',
    description:
      'Adaptasi Remedial Numerasi. Fokus pada peningkatan kemampuan dasar numerasi siswa melalui pendekatan yang adaptif.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Program Sekolah Responsif Gender',
    description:
      'Menciptakan lingkungan sekolah yang aman, inklusif, dan mendukung kesetaraan gender bagi seluruh warga sekolah.',
    icon: <Users className="w-6 h-6" />,
  },
];

const ecosystemPrograms = [
  {
    title: 'Pengembang Konten di PMM',
    description:
      'INSPIRASI ikut mengembangkan konten belajar khusus untuk kepala sekolah di Platform Merdeka Mengajar (PMM) dengan topik Supervisi Akademik. Konten ini berisi panduan langkah-langkah melakukan supervisi akademik.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'Tim Perumus Model Kompetensi',
    description:
      'Berkontribusi bersama tim GTK Kemendikbud Ristek merumuskan model kompetensi guru dan kepala sekolah. Tertuang dalam Perdirjen 7327 (Kepala Sekolah) dan 2626 (Guru).',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Mitra Pembangunan IKM',
    description:
      'Mengawal Implementasi Kurikulum Merdeka (IKM) ke sekolah-sekolah dampingan. Daerah yang didampingi tersebar di Kabupaten Tegal, Karawang, dan Sumba Barat Daya.',
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    title: 'Diseminasi Program di Pemda',
    description:
      'Membantu pemerintah daerah (seperti Karawang dan Sumba Barat Daya) dalam proses diseminasi, sehingga daerah dapat mengimplementasikan program serupa secara mandiri.',
    icon: <Share2 className="w-6 h-6" />,
  },
];

function Program() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>('.program-section');

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
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
            src="/activities/8.webp"
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
              <Badge variant="secondary">Program</Badge>
              <Badge variant="outline" className="border-background/25 text-background/80">
                Inisiatif Kepemimpinan Pendidikan
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-background md:text-6xl">Program Kami</h1>

            <p className="text-base leading-relaxed text-background/85 md:text-lg">
              INSPIRASI menyusun program pelatihan yang disesuaikan dengan kondisi serta kebutuhan kepala sekolah di
              lapangan, agar potensi para pemimpin sekolah dapat berkembang maksimal.
            </p>

            <div className="flex items-start gap-3 rounded-lg bg-background/10 p-4 text-background/85 ring-1 ring-background/15 md:max-w-xl">
              <Quote className="mt-0.5 size-5 shrink-0" />
              <p className="text-sm md:text-base">"Membangun Pemimpin Sekolah Untuk Pendidikan Indonesia."</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-24 mt-16">
        {/* Pelatihan Kepala Sekolah */}
        <section className="program-section">
          <div className="flex flex-col gap-8 items-start mb-10">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-foreground mb-4">Pelatihan Kepala Sekolah</h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-6" />
              <p className="text-muted-foreground max-w-3xl">
                Pelatihan khusus untuk kepala sekolah yang disesuaikan dengan jenjang kompetensi, memastikan materi yang
                diberikan tepat sasaran dan relevan dengan tantangan di lapangan.
              </p>
            </div>
            <div className="w-full px-12">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {trainingPrograms.map((program, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="h-full border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-2 rounded-full bg-primary/10 text-primary">{program.icon}</div>
                            </div>
                            <CardTitle className="text-base md:text-lg">{program.title}</CardTitle>
                          </CardHeader>
                          {program.description && (
                            <CardContent>
                              <CardDescription>{program.description}</CardDescription>
                            </CardContent>
                          )}
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Membangun Ekosistem */}
        <section className="program-section">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 space-y-6">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-foreground mb-4">Membangun Ekosistem</h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-6" />
                <p className="text-muted-foreground mb-6">
                  Menginisiasi dan terlibat aktif dalam diskusi isu kepala sekolah dan pendidikan. Kami berupaya
                  menyelaraskan dan memberikan masukan kebijakan untuk kemajuan pendidikan Indonesia.
                </p>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Kolaborasi
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Bekerja sama dengan Kemendikbud Ristek, Pemerintah Daerah, dan organisasi internasional.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-6">
              {ecosystemPrograms.map((program, index) => (
                <Card key={index} className="transition-all duration-300 hover:translate-x-2">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-24 flex items-center justify-center bg-muted/50 sm:border-r border-b sm:border-b-0">
                      <div className="p-4 text-primary">{program.icon}</div>
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <CardTitle>{program.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Penelitian & Uji Coba */}
        <section className="p-6 rounded-lg bg-chart-1/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Penelitian & Uji Coba</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Melakukan uji coba dan meneliti isu-isu kepemimpinan sekolah yang masih minim penelitian. Sejak 2020, kami
              aktif terlibat dalam riset bersama Global School Leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {program.icon}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-secondary text-secondary-foreground">{program.icon}</span>
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Program;
