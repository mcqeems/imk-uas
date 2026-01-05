import { useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Compass, Quote, Sparkles } from 'lucide-react';
import InspirasiMark from '@/assets/inspirasi.svg?react';

gsap.registerPlugin(ScrollTrigger);

function Profil() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-hero]>*',
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
        }
      );

      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    },
    { scope: rootRef }
  );

  const values = [
    'Inovatif',
    'Bekerja dengan Sistem',
    'Berorientasi Dampak pada Siswa',
    'Kolaboratif',
    'Membangun Pengetahuan',
  ];

  const awards = [
    {
      title: 'Top 5 AVPN Constellation (2020)',
      description:
        'Penghargaan untuk inisiatif kolaboratif terbaik yang berupaya menyelesaikan masalah kompleks secara inovatif.',
    },
    {
      title: 'Octava Social Innovation Challenge (2022)',
      description:
        'Salah satu dari 10 pemenang penghargaan dari MIT Solve dan disponsori UBS Optimus Foundation untuk pemanfaatan teknologi dalam pendidikan.',
    },
    {
      title: 'CSR & Lingkungan Kabupaten Karawang (2023)',
      description: 'Apresiasi atas kontribusi mendukung pembangunan pendidikan di Kabupaten Karawang sejak 2019–2023.',
    },
  ];

  return (
    <div ref={rootRef} className="space-y-14 md:space-y-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/activities/12.webp"
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
          <div data-hero className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">Profil</Badge>
              <Badge variant="outline" className="border-background/25 text-background/80">
                Inisiatif Kepemimpinan Pendidikan
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-background md:text-6xl">
              Tentang INSPIRASI Foundation
            </h1>

            <p className="text-base leading-relaxed text-background/85 md:text-lg">
              INSPIRASI Foundation adalah lembaga non-profit dan independen yang berfokus pada peningkatan kualitas
              pembelajaran siswa melalui dukungan penguatan kepemimpinan kepala sekolah.
            </p>

            <div className="flex items-start gap-3 rounded-lg bg-background/10 p-4 text-background/85 ring-1 ring-background/15 md:max-w-xl">
              <Quote className="mt-0.5 size-5 shrink-0" />
              <p className="text-sm md:text-base">“We can’t improve schools without leaders.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4">
        <div data-animate="fade-up" className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Mengapa Kepala Sekolah?</h2>
          </div>
          <div className="h-1 w-20 bg-primary rounded-full mb-6" />

          <p className="text-base text-muted-foreground md:text-lg">
            Mayoritas kepala sekolah di Indonesia belum menguasai keterampilan yang diperlukan untuk menjalankan
            perannya sebagai pemimpin pembelajaran. Karena itu, INSPIRASI berfokus pada kepemimpinan sekolah sebagai
            kunci perbaikan mutu pendidikan.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Card data-animate="fade-up" className="ring-foreground/15">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                Prinsip Kepemimpinan Pendidikan
              </CardTitle>
              <CardDescription>Gagasan Ki Hajar Dewantara tentang peran pemimpin sekolah.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-base">
                  <span className="font-semibold">Ing Ngarsa Sung Tuladha</span> — di depan menjadi teladan
                </p>
                <p className="text-base">
                  <span className="font-semibold">Ing Madya Mangun Karsa</span> — di tengah membangkitkan semangat
                </p>
                <p className="text-base">
                  <span className="font-semibold">Tut Wuri Handayani</span> — di belakang mendorong penyelesaian
                  masalah/tugas
                </p>
              </div>
              <Separator />
              <p className="text-base text-muted-foreground">
                Berbagai studi juga menunjukkan kepemimpinan sekolah berkorelasi dengan hasil belajar siswa, termasuk
                temuan World Bank (WDR 2018), publikasi McKinsey (2010), dan studi manajemen sekolah oleh Bloom (2015).
              </p>
            </CardContent>
          </Card>

          <Card data-animate="fade-up" className="ring-foreground/15">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="size-4 text-primary" />
                Akar Cerita INSPIRASI
              </CardTitle>
              <CardDescription>Berawal dari riset dan kebutuhan dukungan praktis di sekolah.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-muted-foreground">
                Ide INSPIRASI berawal dari riset Asia Philanthropy Circle (APC) (2017) yang menekankan kepemimpinan dan
                tata kelola sekolah sebagai katalisator kemajuan pendidikan Indonesia.
              </p>
              <p className="text-base text-muted-foreground">
                Rekomendasinya mendorong inisiatif seperti “Akademi Kepemimpinan Kepala Sekolah” melalui pendekatan
                workshop dan pendampingan langsung di sekolah.
              </p>
              <p className="text-base text-muted-foreground">
                INSPIRASI juga menjadi bagian dari jejaring Global School Leaders (GSL) untuk memperkuat kualitas
                kepemimpinan pendidikan di berbagai negara berkembang.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4">
        <div data-animate="fade-up" className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Visi, Misi & Nilai</h2>
          </div>
          <div className="h-1 w-20 bg-primary rounded-full mb-6" />

          <p className="text-base text-muted-foreground md:text-lg">
            Fokus kami adalah meningkatkan kualitas kepemimpinan sekolah untuk berdampak pada pembelajaran siswa.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <Card data-animate="fade-up" className="ring-foreground/15">
            <CardHeader>
              <CardTitle>Visi</CardTitle>
              <CardDescription>Arah jangka panjang INSPIRASI.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Menjadi pemimpin dalam solusi kepemimpinan sekolah yang inovatif, efektif, dan praktis yang berdampak
                pada pembelajaran siswa di Indonesia.
              </p>
            </CardContent>
          </Card>

          <Card data-animate="fade-up" className="ring-foreground/15">
            <CardHeader>
              <CardTitle>Misi</CardTitle>
              <CardDescription>Yang kami lakukan untuk mewujudkan visi.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-base text-muted-foreground">
                Membangun model inisiatif kepemimpinan sekolah yang efektif untuk meningkatkan hasil belajar dan
                mempromosikan efektivitas sekolah.
              </p>
              <p className="text-base text-muted-foreground">
                Berkolaborasi untuk mewujudkan ekosistem pendidikan yang mendukung peningkatan kualitas kepemimpinan
                sekolah di Indonesia.
              </p>
            </CardContent>
          </Card>

          <Card data-animate="fade-up" className="ring-foreground/15">
            <CardHeader>
              <CardTitle>Nilai</CardTitle>
              <CardDescription>Prinsip yang membimbing cara kami bekerja.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <Badge key={v} variant="outline">
                    {v}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 md:pb-16">
        <div data-animate="fade-up" className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Penghargaan</h2>
          </div>
          <div className="h-1 w-20 bg-primary rounded-full mb-6" />

          <p className="text-base text-muted-foreground md:text-lg">
            INSPIRASI pernah mendapatkan beberapa penghargaan dari lembaga-lembaga, baik di dalam maupun luar negeri.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {awards.map((award) => (
            <Card key={award.title} data-animate="fade-up">
              <CardHeader>
                <CardTitle>{award.title}</CardTitle>
                <CardDescription>{award.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profil;
