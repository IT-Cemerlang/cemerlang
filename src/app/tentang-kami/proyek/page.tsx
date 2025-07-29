
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, HardHat } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Pelapisan Aspal dan Marka di Bandara Rampi",
    location: "Rampi, Indonesia",
    year: "2023",
    product: "Coating & Marking",
    image: "https://i.ibb.co/9mF7GXzf/1.png",
    dataAiHint: "airport runway",
    description: "Pekerjaan pelapisan aspal dan pembuatan marka landasan pacu untuk meningkatkan standar keselamatan di Bandara Rampi."
  },
  {
    title: "Pelapisan Aspal di Simpang Balapan dan Tugu Malang",
    location: "Malang, Indonesia",
    year: "2023",
    product: "Microsurfacing",
    image: "https://i.ibb.co/NnZ3zPSy/2.png",
    dataAiHint: "city monument",
    description: "Pemeliharaan jalan di area ikonik Kota Malang, Simpang Balapan dan Tugu, untuk menjaga kualitas dan estetika kota."
  },
  {
    title: "Pekerjaan Sealant di Bandara Internasional Soekarno-Hatta - Ultimate 3",
    location: "Tangerang, Indonesia",
    year: "2023",
    product: "Sabda Seal",
    image: "https://i.ibb.co/7NkRhz1T/3.png",
    dataAiHint: "airport terminal",
    description: "Aplikasi sealant pada sambungan beton di Terminal 3 Ultimate untuk memastikan ketahanan dan keamanan area apron."
  },
  {
    title: "Pelapisan Aspal di Stadion Gelora Bung Karno Jakarta",
    location: "Jakarta, Indonesia",
    year: "2023",
    product: "Microsurfacing",
    image: "https://i.ibb.co/Zp6hVLzt/4.png",
    dataAiHint: "sports stadium",
    description: "Peningkatan kualitas permukaan jalan dan area di sekitar kompleks olahraga terbesar di Indonesia, Gelora Bung Karno."
  },
  {
    title: "Pekerjaan Sealant dan Sealcoat di Jalan Tol Bali Mandara",
    location: "Bali, Indonesia",
    year: "2023",
    product: "Sealant & Sealcoat",
    image: "https://i.ibb.co/mFXYdfBp/5.png",
    dataAiHint: "toll road sea",
    description: "Proyek pemeliharaan untuk melindungi struktur jalan tol di atas laut dari korosi dan cuaca ekstrem."
  },
  {
    title: "Pelapisan Aspal di Istana Kepresidenan Republik Indonesia",
    location: "Jakarta, Indonesia",
    year: "2023",
    product: "Microsurfacing CH",
    image: "https://i.ibb.co/27nM0TH9/6.png",
    dataAiHint: "presidential palace",
    description: "Proyek prestisius untuk pemeliharaan jalan dan area di dalam kompleks Istana Kepresidenan dengan standar tertinggi."
  },
  {
    title: "Perawatan Sirkuit Sentul Sirkuit A dan B",
    location: "Bogor, Indonesia",
    year: "2022",
    product: "Microsurfacing & Coating",
    image: "https://i.ibb.co/kVmBcVGy/7.png",
    dataAiHint: "race track",
    description: "Perawatan permukaan lintasan balap Sirkuit Sentul untuk memenuhi standar balap dan keselamatan internasional."
  },
  {
    title: "Pengecatan Barrier di Jalan Tol Manado-Bitung",
    location: "Sulawesi Utara, Indonesia",
    year: "2023",
    product: "Coating",
    image: "https://i.ibb.co/QjDpRQwr/8.png",
    dataAiHint: "toll road barrier",
    description: "Pengecatan barrier beton di sepanjang jalan tol Manado-Bitung untuk meningkatkan visibilitas dan keselamatan."
  },
  {
    title: "Renovasi Halaman Gedung Mahkamah Agung Jakarta",
    location: "Jakarta, Indonesia",
    year: "2022",
    product: "Ecobeton",
    image: "https://i.ibb.co/zVRKJnD7/9.png",
    dataAiHint: "courthouse building",
    description: "Pekerjaan renovasi dan perkerasan halaman menggunakan solusi beton ramah lingkungan untuk area pejalan kaki."
  },
  {
    title: "Pekerjaan Pelapisan Aspal di Jalan Tol Becakayu",
    location: "Jakarta, Indonesia",
    year: "2024",
    product: "Microsurfacing CH",
    image: "https://i.ibb.co/0ycJbg0n/10.png",
    dataAiHint: "elevated highway",
    description: "Aplikasi lapisan aus pada salah satu ruas jalan tol layang baru di Jakarta untuk meningkatkan durabilitas."
  },
  {
    title: "Renovasi Gereja POUK Immanuel, Yonpomad, Jonggol, Jawa Barat",
    location: "Jawa Barat, Indonesia",
    year: "2023",
    product: "Coating & Ecobeton",
    image: "https://i.ibb.co/xq9XWP90/12.png",
    dataAiHint: "church building",
    description: "Pekerjaan renovasi area luar dan perkerasan halaman gereja sebagai bagian dari program community service."
  },
  {
    title: "Pekerjaan Pelapisan Landasan Pacu Bandara Halim",
    location: "Jakarta, Indonesia",
    year: "2022",
    product: "Microsurfacing CH-21",
    image: "https://i.ibb.co/xqjffQgd/11.png",
    dataAiHint: "military airport runway",
    description: "Proyek vital pelapisan ulang landasan pacu Bandara Halim Perdanakusuma untuk meningkatkan keamanan penerbangan."
  }
];

export default function ProjectsPage() {
  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
              <h1 className="font-headline text-3xl md:text-4xl font-bold">Proyek Kami</h1>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Dari jalan tol hingga bandara, lihat bagaimana solusi kami telah diimplementasikan dalam berbagai proyek infrastruktur di seluruh Indonesia.</p>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
          <p>
            Portofolio proyek kami adalah cerminan nyata dari keahlian, pengalaman, dan kepercayaan yang diberikan oleh para mitra kami. Setiap proyek, baik berskala besar maupun kecil, kami tangani dengan standar profesionalisme dan kualitas tertinggi. Dari keramaian jalan tol perkotaan, presisi landasan pacu bandara, hingga ketenangan area publik, solusi inovatif Cemerlang telah terbukti andal dalam berbagai kondisi dan tantangan. Galeri ini bukan hanya sekadar kumpulan pekerjaan, melainkan sebuah bukti perjalanan kami dalam membangun infrastruktur yang lebih baik.
          </p>
          <p>
            Kami mengajak Anda untuk menjelajahi berbagai proyek yang telah kami selesaikan. Perhatikan bagaimana produk-produk spesifik seperti Microsurfacing, Sabda Seal, dan Ecobeton telah memberikan solusi yang efektif dan tahan lama. Setiap gambar dan deskripsi menceritakan kisah tentang bagaimana kami berkolaborasi dengan klien untuk mengatasi masalah, meningkatkan durabilitas, dan mencapai hasil akhir yang membanggakan. Portofolio ini adalah jaminan nyata atas kemampuan kami untuk mewujudkan visi infrastruktur Anda menjadi kenyataan.
          </p>
        </div>
      </div>
      <div className="container pt-0 pb-12 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
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
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{project.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <HardHat className="h-4 w-4" />
                                <span>{project.product}</span>
                            </div>
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
