
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Route, Clock, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RoadMaintenancePage() {
  const products = [
    { name: "Microsurfacing", description: "Untuk pelapisan ulang preventif dan korektif.", link: "/produk" },
    { name: "Coldmix", description: "Untuk penambalan lubang yang cepat dan praktis.", link: "/produk" },
    { name: "Sealant", description: "Untuk melindungi sambungan dan mencegah kerusakan struktur.", link: "/produk" },
  ];

  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container text-center">
          <Route className="mx-auto h-16 w-16 text-primary" />
          <h1 className="font-headline text-3xl md:text-4xl font-bold mt-4">Solusi Pemeliharaan Jalan Raya</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Menjaga Aset Infrastruktur Anda dengan Efektif dan Efisien.</p>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle>Narasi Copywriting</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-justify space-y-4">
              <p>
                Jalan raya adalah urat nadi perekonomian dan mobilitas masyarakat. Namun, setiap hari, jalan menanggung beban lalu lintas, paparan cuaca, dan tekanan lingkungan yang tak henti-hentinya. Tanpa perawatan yang tepat, kerusakan kecil seperti retak halus atau lubang dapat dengan cepat berkembang menjadi masalah besar yang memerlukan perbaikan mahal dan mengganggu kelancaran lalu lintas. Di sinilah solusi pemeliharaan jalan Cemerlang berperan sebagai dokter bagi infrastruktur Anda.
              </p>
              <p>
                Kami tidak hanya menambal yang rusak, kami merawat dan meremajakan. Pendekatan kami adalah tentang pemeliharaan preventif yang cerdas—bertindak sebelum kerusakan menjadi parah. Dengan teknologi seperti Microsurfacing, kami memberikan 'kulit' pelindung baru yang memperpanjang umur jalan, mengembalikan keamanan dengan permukaan anti-slip, dan menyegarkan penampilannya. Untuk 'luka' yang tak terhindarkan, Coldmix kami adalah 'plester' instan yang kuat dan andal. Memilih solusi pemeliharaan Cemerlang berarti Anda berinvestasi dalam kelancaran, keamanan, dan keberlanjutan aset jalan Anda untuk tahun-tahun mendatang.
              </p>
            </CardContent>
          </Card>

          <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-10">Manfaat Utama Solusi Kami</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <Card className="p-6">
                <TrendingUp className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Memperpanjang Umur Jalan</h3>
                <p className="text-sm text-muted-foreground mt-2">Tindakan preventif dengan biaya lebih rendah untuk menghindari perbaikan besar yang mahal di masa depan.</p>
            </Card>
            <Card className="p-6">
                <ShieldCheck className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Meningkatkan Keselamatan</h3>
                <p className="text-sm text-muted-foreground mt-2">Mengembalikan tekstur permukaan, memperbaiki kerataan, dan meningkatkan daya cengkeram (skid resistance).</p>
            </Card>
            <Card className="p-6">
                <Clock className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Minimalkan Gangguan</h3>
                <p className="text-sm text-muted-foreground mt-2">Aplikasi yang cepat dan waktu pengeringan singkat berarti jalan dapat segera dibuka kembali untuk umum.</p>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Produk Terkait</CardTitle>
              <CardDescription>Produk-produk unggulan kami untuk solusi pemeliharaan jalan.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.name} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                    <Button asChild>
                      <Link href={product.link}>Lihat Produk</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

           <div className="mt-12 pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/solusi">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Semua Solusi
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
