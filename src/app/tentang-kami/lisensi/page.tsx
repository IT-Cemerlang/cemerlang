
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

const licenses = [
  {
    logo: "https://i.ibb.co/b56BZFmD/20.png",
    dataAiHint: "aviation organization logo",
    title: "ICAO-OACI-NKAO",
    description: "Memenuhi standar keamanan dan regulasi dari Organisasi Penerbangan Sipil Internasional.",
    country: "Internasional"
  },
  {
    logo: "https://i.ibb.co/3mMR7Mht/21.png",
    dataAiHint: "aviation administration logo",
    title: "Federal Aviation Administration (FAA)",
    description: "Produk kami sesuai dengan regulasi yang ditetapkan oleh Administrasi Penerbangan Federal Amerika Serikat.",
    country: "Amerika Serikat"
  },
  {
    logo: "https://i.ibb.co/k2q6SwVn/22.png",
    dataAiHint: "government ministry logo",
    title: "Kementerian Perhubungan",
    description: "Telah terverifikasi dan memenuhi standar yang ditetapkan oleh Kementerian Perhubungan Republik Indonesia.",
    country: "Indonesia"
  },
  {
    logo: "https://i.ibb.co/xKHKQtgg/23.png",
    dataAiHint: "ecommerce platform logo",
    title: "PaDi UMKM",
    description: "Terdaftar dalam platform pengadaan digital BUMN untuk mendukung pemberdayaan UMKM.",
    country: "Indonesia"
  },
  {
    logo: "https://i.ibb.co/3YCqCh7F/24.png",
    dataAiHint: "government procurement logo",
    title: "LKPP e-catalogue",
    description: "Tersedia dalam sistem e-katalog Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah.",
    country: "Indonesia"
  },
  {
    logo: "https://i.ibb.co/S775XtrL/25.png",
    dataAiHint: "iso standard logo",
    title: "ISO 9001:2015 - Manajemen Mutu",
    description: "Sistem manajemen kami telah tersertifikasi ISO 9001:2015, menjamin konsistensi kualitas.",
    country: "Internasional"
  },
  {
    logo: "https://i.ibb.co/LXRBjMvv/26.png",
    dataAiHint: "eco friendly leaf",
    title: "Eco Friendly",
    description: "Berkomitmen pada praktik dan produk yang ramah lingkungan untuk konstruksi berkelanjutan.",
    country: "Global"
  },
  {
    logo: "https://i.ibb.co/B5zTZXB9/KP14.png",
    dataAiHint: "government regulation logo",
    title: "KP14",
    description: "Regulasi spesifik dari Kementerian Perhubungan yang telah kami penuhi.",
    country: "Indonesia"
  }
];

export default function LicensesPage() {
  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
              <h1 className="font-headline text-3xl md:text-4xl font-bold">Lisensi & Sertifikasi Produk</h1>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Kualitas dan keandalan kami didukung oleh lisensi dan sertifikasi dari lembaga nasional maupun internasional.</p>
          </div>
        </div>
      </div>

       <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
          <p>
            Di Cemerlang, lisensi dan sertifikasi lebih dari sekadar pemenuhan standar; ini adalah cerminan dari komitmen kami yang tak tergoyahkan terhadap keunggulan dan keamanan. Setiap logo yang Anda lihat di halaman ini mewakili proses pengujian yang ketat, validasi dari pihak ketiga yang independen, dan jaminan bahwa produk yang Anda terima telah memenuhi tolok ukur kualitas tertinggi dalam industri. Kami memahami bahwa dalam setiap proyek infrastruktur, kepercayaan adalah fondasi utamanya.
          </p>
          <p>
            Oleh karena itu, kami secara proaktif mendaftarkan produk kami untuk diakui oleh lembaga-lembaga terkemuka, baik di tingkat nasional maupun internasional. Ini adalah bukti transparansi dan dedikasi kami untuk memberikan ketenangan pikiran kepada setiap klien. Saat Anda memilih Cemerlang, Anda tidak hanya membeli sebuah produk, tetapi juga berinvestasi pada solusi yang telah terbukti andal, aman, dan bertanggung jawab, memastikan keberhasilan dan daya tahan proyek Anda untuk jangka panjang.
          </p>
        </div>
      </div>

      <div className="container pt-0 pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {licenses.map((license, index) => (
                <Card key={index} className="flex flex-col sm:flex-row items-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <Image src={license.logo} alt={`${license.title} logo`} width={400} height={400} data-ai-hint={license.dataAiHint} className="object-contain w-32 h-32" />
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="font-headline text-xl font-bold">{license.title}</h3>
                        <p className="text-sm font-semibold text-primary mb-2">{license.country}</p>
                        <p className="text-muted-foreground">{license.description}</p>
                    </div>
                </Card>
            ))}
        </div>

        <Card className="mt-16 bg-primary text-primary-foreground">
            <CardContent className="p-8 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
                <div className="flex justify-center md:justify-start">
                    <ShieldCheck className="w-16 h-16" />
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-headline text-2xl font-bold">Jaminan Kualitas Anda</h3>
                    <p className="mt-2 text-primary-foreground/80">
                        Setiap lisensi dan sertifikat adalah bukti komitmen kami untuk memberikan produk dengan standar tertinggi kepada Anda. Kami tidak hanya menjual produk, kami memberikan jaminan kualitas dan ketenangan pikiran untuk setiap proyek Anda.
                    </p>
                </div>
            </CardContent>
        </Card>
      </div>
      <CtaBanner />
    </>
  );
}
