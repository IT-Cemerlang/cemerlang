
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import CtaBanner from "@/components/cta-banner";

const licenses = [
  { name: "ICAO-OACI-NKAO", logo: "https://i.ibb.co/b56BZFmD/20.png", dataAiHint: "aviation organization logo" },
  { name: "Federal Aviation Administration", logo: "https://i.ibb.co/3mMR7Mht/21.png", dataAiHint: "aviation administration logo" },
  { name: "Kementerian Perhubungan", logo: "https://i.ibb.co/k2q6SwVn/22.png", dataAiHint: "government ministry logo" },
  { name: "PaDi UMKM", logo: "https://i.ibb.co/xKHKQtgg/23.png", dataAiHint: "ecommerce platform logo" },
  { name: "LKPP ecatalogue", logo: "https://i.ibb.co/3YCqCh7F/24.png", dataAiHint: "government procurement logo" },
  { name: "ISO 9001:2015", logo: "https://i.ibb.co/S775XtrL/25.png", dataAiHint: "iso standard logo" },
  { name: "Eco Friendly", logo: "https://i.ibb.co/LXRBjMvv/26.png", dataAiHint: "eco friendly leaf" },
  { name: "KP14", logo: "https://i.ibb.co/B5zTZXB9/KP14.png", dataAiHint: "government regulation logo" },
];

const featuredProjects = [
  {
    title: "Pelapisan Aspal dan Penandaan di Bandara Rampi",
    location: "Tangerang, Indonesia",
    year: "2023",
    product: "Sabda Seal",
    image: "https://i.ibb.co/9mF7GXzf/1.png",
    dataAiHint: "airport runway",
    description: "Aplikasi sealant pada sambungan beton di Terminal 3 Ultimate untuk memastikan ketahanan dan keamanan area apron."
  },
  {
    title: "Pelapisan Aspal di Simpang Balapan dan Tugu Malang",
    location: "Jakarta, Indonesia",
    year: "2023",
    product: "Microsurfacing CH",
    image: "https://i.ibb.co/NnZ3zPSy/2.png",
    dataAiHint: "city monument",
    description: "Proyek prestisius untuk pemeliharaan jalan dan area di dalam kompleks Istana Kepresidenan dengan standar tertinggi."
  },
  {
    title: "Pekerjaan Sealant di Bandara Internasional Soekarno-Hatta - Ultimate 3",
    location: "Bogor, Indonesia",
    year: "2022",
    product: "Microsurfacing & Coating",
    image: "https://i.ibb.co/7NkRhz1T/3.png",
    dataAiHint: "airport terminal",
    description: "Perawatan permukaan lintasan balap Sirkuit Sentul untuk memenuhi standar balap dan keselamatan internasional."
  },
  {
    title: "Pelapisan Aspal di Stadion Gelora Bung Karno Jakarta",
    location: "Jakarta, Indonesia",
    year: "2022",
    product: "Microsurfacing CH-21",
    image: "https://i.ibb.co/Zp6hVLzt/4.png",
    dataAiHint: "sports stadium",
    description: "Proyek vital pelapisan ulang landasan pacu Bandara Halim Perdanakusuma untuk meningkatkan keamanan penerbangan."
  }
];

const featuredClients = [
    { name: "Adhi Karya", logo: "https://i.ibb.co/8D7fhDWL/5.png", dataAiHint: "company logo" },
    { name: "Angkasa Pura Airport", logo: "https://i.ibb.co/GQQk1sDN/ANGKASA-PURA-AIRPORT.png", dataAiHint: "company logo" },
    { name: "Hutama Karya", logo: "https://i.ibb.co/jPTGTWvC/14.png", dataAiHint: "company logo" },
    { name: "Jasa Marga", logo: "https://i.ibb.co/BV5135Jd/11.png", dataAiHint: "company logo" },
];


export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const featuredLicenses = licenses.slice(0, 8);

  return (
    <div className="flex flex-col">
       <section
        className="relative w-full py-32 md:py-48 lg:py-64 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.ibb.co/XGNvJMK/hero-section-beranda.png')" }}
        data-ai-hint="highway road"
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
              Solusi Inovatif untuk Infrastruktur Indonesia
            </h1>
            <p className="mt-4 max-w-[600px] mx-auto text-neutral-200 md:text-xl">
              Menyediakan material konstruksi berkualitas tinggi untuk jalan, jembatan, dan bandara.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/produk">
                Lihat Produk Kami <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/kontak">
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Tentang Kami</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">Membangun Masa Depan, Satu Proyek Sekaligus</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed text-justify">
              Cemerlang adalah perusahaan terkemuka yang bergerak di bidang penyediaan material konstruksi inovatif dan berkualitas tinggi. Sejak didirikan, kami bertekad untuk menjadi mitra terpercaya dalam pembangunan infrastruktur di seluruh Indonesia, mulai dari jalan raya, jembatan, hingga bandara.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Produk Berstandar Internasional</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Dukungan Teknis Profesional</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Komitmen pada Keberlanjutan</span>
              </li>
            </ul>
            <Button asChild size="lg" variant="outline">
              <Link href="/tentang-kami/sekilas-kami">
                Selengkapnya Tentang Kami
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://i.ibb.co/KpWcPr1y/ilustrasi-pabrik.png"
              alt="About us"
              width={550}
              height={450}
              className="overflow-hidden rounded-xl object-cover"
              data-ai-hint="factory illustration"
            />
          </div>
        </div>
      </section>

      <section id="produk" className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Produk Unggulan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Jelajahi berbagai produk unggulan kami yang dirancang untuk memberikan performa maksimal dan daya tahan terbaik untuk proyek Anda.
                </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="aspect-[9/16] w-full object-cover"
                    data-ai-hint={product.dataAiHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                  <CardDescription className="mt-2 text-sm">{product.description}</CardDescription>
                </CardContent>
                <CardFooter className="mt-auto p-6 pt-0">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href={`/produk`}>Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/produk">
                Lihat Semua Produk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="lisensi" className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lisensi dan Sertifikasi</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Kualitas dan keandalan produk kami telah diakui melalui berbagai lisensi dan sertifikasi nasional maupun internasional.
                </p>
            </div>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
              {featuredLicenses.map((license) => (
                <div key={license.name} className="transition-all duration-300 flex flex-col items-center text-center gap-2">
                    <Image
                        src={license.logo}
                        alt={license.name}
                        width={400}
                        height={400}
                        className="object-contain aspect-square w-32"
                        data-ai-hint={license.dataAiHint}
                    />
                    <p className="font-semibold text-sm">{license.name}</p>
                </div>
              ))}
            </div>
          </div>
           <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/tentang-kami/lisensi">
                Lihat Semua Lisensi <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="proyek" className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyek Unggulan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Portofolio kami mencakup berbagai proyek infrastruktur strategis di seluruh Indonesia, menunjukkan kepercayaan klien terhadap solusi kami.
                </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {featuredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                    <CardHeader className="p-0 relative aspect-[9/16] w-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{objectFit: "cover"}}
                            className="z-0"
                            data-ai-hint={project.dataAiHint}
                        />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                        <CardTitle className="font-headline text-xl mb-3">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 mt-auto">
                       <Button asChild variant="secondary" className="w-full">
                         <Link href={`/tentang-kami/proyek`}>Lihat Detail Proyek</Link>
                       </Button>
                    </CardFooter>
                </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/tentang-kami/proyek">
                Lihat Semua Proyek <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="klien" className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dipercaya Oleh</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Kami bangga menjadi mitra terpercaya bagi perusahaan dan institusi terkemuka di Indonesia.
                </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {featuredClients.map((client) => (
              <Card key={client.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={400}
                    height={400}
                    className="object-contain aspect-square w-full p-4"
                    data-ai-hint={client.dataAiHint}
                  />
                </CardHeader>
                <CardContent className="p-6 text-center flex-grow">
                  <CardTitle className="text-xl h-full flex items-center justify-center">{client.name}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/tentang-kami/klien-kami">
                Lihat Semua Klien <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <CtaBanner />
    </div>
  );
}
