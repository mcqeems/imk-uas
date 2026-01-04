import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden text-background mt-8">
      <div className="absolute inset-0 -z-10">
        <img className="h-full w-full object-cover" src="/activities/13.jpg" alt="" aria-hidden="true" loading="lazy" />
        <div className="absolute inset-0 bg-foreground/90" aria-hidden="true" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-full.png" alt="Inspirasi Foundation" className="h-7 w-auto" loading="lazy" />
          </div>
          <p className="text-center text-sm text-background/75 md:text-right">
            Inisiatif Kepemimpinan Pendidikan untuk Raih Prestasi
          </p>
        </div>

        <Separator className="my-8 bg-border/20" />

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="mt-5 space-y-5 text-sm text-background/75">
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-background/60">Call Anytime</p>
                  <a className="text-background hover:underline" href="tel:+6282223327472">
                    0822 2332 7472
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-background/60">Send Email</p>
                  <a className="text-background hover:underline" href="mailto:info@inspirasifoundation.org">
                    info@inspirasifoundation.org
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-background/60">Visit Office</p>
                  <p className="text-background">
                    Jl. Palembang Kav. 35-37 Kelurahan Kebon Melati, Kecamatan Tanah Abang, Jakarta Pusat
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Social Media</h3>
            <ul className="mt-5 space-y-3 text-sm text-background/75">
              {['Instagram', 'Facebook', 'LinkedIn', 'Youtube', 'Spotify', 'Tiktok', 'X'].map((label) => (
                <li key={label}>
                  <a className="hover:underline" href="#">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Informasi</h3>
            <ul className="mt-5 space-y-3 text-sm text-background/75">
              {['Karir'].map((label) => (
                <li key={label}>
                  <a className="hover:underline" href="#">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mt-10 bg-border/20" />

        <div className="flex flex-col gap-3 py-4 text-xs text-background/60 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">© Copyright 2023 by Inspirasi Foundation</p>

          <div className="flex justify-center md:justify-end">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="border-border/30 bg-background/10 text-background hover:bg-background/15"
            >
              <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
