
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Recycle, Wind, Leaf, Droplet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GreenSolutionPage() {
  const products = [
    { name: "Ecobeton", description: "Beton dengan jejak karbon lebih rendah.", link: "/produk" },
    { name: "Microsurfacing", description: "Aplikasi dingin yang menghemat energi.", link: "/produk" },
    { name: "Coldmix", description: "Aplikasi tanpa pemanasan sama sekali.", link: "/produk" },
  ];

  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container text-center">
          <Recycle className="mx-auto h-16 w-16 text-primary" />
          <h1 className="font-headline text-3xl md:text-4xl font-bold mt-4">Solusi Konstruksi Ramah Lingkungan</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Membangun Hari Ini, Melindungi Hari Esok.</p>
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
                Di era di mana jejak langkah kita di bumi menjadi semakin penting, industri konstruksi memiliki tanggung jawab besar. Kami di Cemerlang memandang tanggung jawab ini bukan sebagai beban, melainkan sebagai sebuah panggilan untuk berinovasi. Kami percaya bahwa membangun infrastruktur yang megah tidak harus mengorbankan kesehatan planet kita. Solusi ramah lingkungan kami adalah bukti nyata dari komitmen tersebut.
              </p>
              <p>
                Kami mengubah cara pandang tradisional dengan memperkenalkan material dan metode yang lebih 'hijau'. Ecobeton kami lahir dari gagasan bahwa beton yang kuat tidak harus berasal dari proses yang boros energi. Teknik aplikasi dingin seperti Microsurfacing dan Coldmix kami secara drastis mengurangi emisi dan konsumsi bahan bakar di lapangan. Setiap kali Anda memilih solusi ramah lingkungan dari Cemerlang, Anda tidak hanya membangun sebuah struktur. Anda turut serta dalam gerakan global untuk keberlanjutan, memastikan bahwa kemajuan yang kita nikmati hari ini tidak merampas hak generasi mendatang untuk menikmati planet yang sehat dan lestari.
              </p>
            </CardContent>
          </Card>

          <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-10">Manfaat Utama Solusi Kami</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <Card className="p-6">
                <Wind className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Mengurangi Jejak Karbon</h3>
                <p className="text-sm text-muted-foreground mt-2">Produk dan proses yang dirancang untuk menghasilkan emisi CO2 yang lebih rendah.</p>
            </Card>
            <Card className="p-6">
                <Leaf className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Efisiensi Energi</h3>
                <p className="text-sm text-muted-foreground mt-2">Metode aplikasi dingin (cold-applied) menghilangkan kebutuhan akan pemanasan yang boros energi.</p>
            </Card>
            <Card className="p-6">
                <Droplet className="mx-auto h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-lg font-semibold">Konstruksi Berkelanjutan</h3>
                <p className="text-sm text-muted-foreground mt-2">Mendukung praktik pembangunan hijau tanpa mengorbankan kualitas dan daya tahan hasil akhir.</p>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Produk Terkait</CardTitle>
              <CardDescription>Produk-produk unggulan kami untuk solusi konstruksi ramah lingkungan.</CardDescription>
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
