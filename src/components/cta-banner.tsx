
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section 
      className="w-full py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.ibb.co/VYTXm1Q1/sebuah-jalan-aspal-y.png')" }}
      data-ai-hint="road construction asphalt"
    >
      <div className="container px-4 md:px-6">
        <div className="rounded-2xl p-8 md:p-12 lg:p-16 text-center bg-black/60">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">Siap Memulai Proyek Anda?</h2>
            <p className="text-neutral-200 text-lg mt-4">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan konstruksi Anda. Hubungi kami untuk konsultasi gratis atau kunjungi halaman produk kami untuk melihat solusi yang kami tawarkan.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/kontak">
                  Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/produk">
                  Lihat Produk
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
