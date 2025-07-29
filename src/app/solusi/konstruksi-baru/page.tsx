
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HardHat, Zap, Layers, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewConstructionPage() {
  const products = [
    { name: "Ecobeton", description: "Solusi beton inovatif dan ramah lingkungan.", link: "/produk" },
    { name: "Geone", description: "Geosintetik untuk stabilisasi dan perkuatan tanah.", link: "/produk" },
    { name: "S.A.M.I Waterproofing", description: "Perlindungan vital untuk struktur jembatan.", link: "/produk" },
  ];

  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container text-center">
          <HardHat className="mx-auto h-16 w-16 text-primary" />
          <h1 className="font-headline text-3xl md:text-4xl font-bold mt-4">Solusi Konstruksi Infrastruktur Baru</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Membangun Fondasi Masa Depan dengan Material Unggul dan Inovatif.</p>
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
                Membangun sebuah infrastruktur baru adalah tentang menciptakan warisan. Ini adalah tentang mendirikan struktur yang tidak hanya berfungsi hari ini, tetapi juga akan berdiri kokoh untuk melayani generasi yang akan datang. Setiap jembatan yang terbentang, setiap jalan yang terbuka, adalah janji masa depan yang lebih baik. Di Cemerlang, kami memahami besarnya tanggung jawab ini. Oleh karena itu, kami tidak hanya menyediakan material; kami memberikan kepastian dan inovasi yang tertanam dalam setiap butir produk kami.
              </p>
              <p>
                Kami menantang batasan konvensional dengan solusi seperti Ecobeton, yang membuktikan bahwa kekuatan dan kecepatan dapat berjalan seiring dengan kelestarian lingkungan. Kami mengubah tanah yang labil menjadi fondasi yang andal dengan Geone. Kami melindungi investasi jangka panjang Anda pada struktur jembatan dengan sistem Waterproofing S.A.M.I yang tak tertembus. Memilih Cemerlang untuk proyek konstruksi baru Anda berarti memilih untuk membangun dengan lebih cerdas, lebih cepat, dan lebih kuat. Anda tidak hanya membangun sebuah struktur, Anda sedang membangun masa depan yang kokoh.
              </p>
            </CardContent>
          </Card>

          <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-10">Manfaat Utama Solusi Kami</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <Card className="p-6">
                <BarChart className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Kekuatan & Durabilitas</h3>
                <p className="text-sm text-muted-foreground mt-2">Material yang dirancang untuk memberikan kekuatan struktural superior dan daya tahan jangka panjang.</p>
            </Card>
            <Card className="p-6">
                <Layers className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Stabilisasi & Perkuatan</h3>
                <p className="text-sm text-muted-foreground mt-2">Solusi efektif untuk meningkatkan daya dukung tanah dan mencegah kegagalan struktur dari bawah.</p>
            </Card>
            <Card className="p-6">
                <Zap className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Efisiensi Konstruksi</h3>
                <p className="text-sm text-muted-foreground mt-2">Produk seperti beton cepat kering membantu mempercepat jadwal proyek dan mengurangi biaya keseluruhan.</p>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Produk Terkait</CardTitle>
              <CardDescription>Produk-produk unggulan kami untuk proyek konstruksi baru.</CardDescription>
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
