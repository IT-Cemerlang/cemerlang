
"use client";

import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, HardHat, Recycle, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const solutions = [
  {
    icon: <Route className="h-12 w-12 text-primary" />,
    title: "Pemeliharaan Jalan Raya",
    description: "Kami menyediakan solusi lengkap untuk pemeliharaan jalan, mulai dari pelapisan ulang dengan Microsurfacing hingga penambalan cepat dengan Coldmix. Produk kami dirancang untuk memperpanjang umur jalan dan meningkatkan keselamatan.",
    benefits: [
      "Mengembalikan kondisi permukaan jalan",
      "Meningkatkan daya cengkeram (skid resistance)",
      "Aplikasi cepat dan efisien"
    ],
    link: "/solusi/pemeliharaan-jalan"
  },
  {
    icon: <HardHat className="h-12 w-12 text-primary" />,
    title: "Konstruksi Infrastruktur Baru",
    description: "Untuk proyek konstruksi baru, kami menawarkan material inovatif seperti Ecobeton dan Geone. Solusi ini memberikan kekuatan struktural yang superior, stabilitas tanah, dan mendukung pembangunan yang lebih efisien.",
    benefits: [
      "Meningkatkan kekuatan dan daya tahan struktur",
      "Stabilisasi tanah yang efektif",
      "Mempercepat waktu konstruksi"
    ],
    link: "/solusi/konstruksi-baru"
  },
  {
    icon: <Recycle className="h-12 w-12 text-primary" />,
    title: "Solusi Ramah Lingkungan",
    description: "Komitmen kami terhadap lingkungan terwujud dalam produk seperti Ecobeton yang rendah emisi dan teknik Microsurfacing yang menghemat energi. Kami membantu Anda membangun secara berkelanjutan tanpa mengorbankan kualitas.",
    benefits: [
      "Mengurangi jejak karbon proyek",
      "Penggunaan material daur ulang",
      "Efisiensi energi dalam aplikasi"
    ],
    link: "/solusi/ramah-lingkungan"
  }
];

export default function SolutionsPage() {
  return (
    <>
       <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">Solusi Kami</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Kami menawarkan solusi yang disesuaikan untuk setiap tantangan dalam proyek konstruksi dan pemeliharaan infrastruktur Anda.</p>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
            <p>
                Di Cemerlang, kami memahami bahwa setiap proyek infrastruktur memiliki DNA yang unik, dengan tantangan, tujuan, dan lingkungan yang berbeda-beda. Oleh karena itu, kami tidak hanya menjual produk, tetapi menawarkan solusi holistik yang dirancang secara spesifik. Pendekatan kami dimulai dengan mendengarkan dan menganalisis kebutuhan Anda secara mendalam. Apakah Anda memerlukan pemeliharaan jalan raya yang padat dengan gangguan minimal, membangun fondasi yang kokoh di atas tanah yang labil, atau mencari alternatif konstruksi yang lebih ramah lingkungan? Kami hadir sebagai mitra strategis Anda.
            </p>
            <p>
                Halaman ini menyajikan tiga pilar utama dari solusi yang kami tawarkan. Setiap solusi merupakan hasil dari kombinasi produk-produk unggulan kami, keahlian teknis, dan pemahaman mendalam tentang praktik terbaik di industri. Kami percaya bahwa solusi yang tepat adalah solusi yang efektif, efisien, dan berkelanjutan. Jelajahi bagaimana kami dapat membantu Anda mengatasi tantangan spesifik, mulai dari perbaikan skala kecil hingga pengembangan proyek infrastruktur berskala besar. Mari bersama-sama membangun dengan lebih cerdas, kuat, dan bertanggung jawab.
            </p>
        </div>
      </div>
      <div className="container pt-0 pb-12 md:pb-24">
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden shadow-lg border-l-4 border-primary flex flex-col">
              <div className="grid md:grid-cols-5 flex-grow">
                <div className="md:col-span-1 bg-secondary flex items-center justify-center p-8">
                  {solution.icon}
                </div>
                <div className="md:col-span-4 flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">{solution.description}</p>
                    <h4 className="font-semibold mb-3">Keuntungan Utama:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="secondary" className="w-full sm:w-auto">
                        <Link href={solution.link}>Lihat Dokumen</Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
