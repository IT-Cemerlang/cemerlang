
import CtaBanner from "@/components/cta-banner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Heart, ShieldCheck, Star, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
    {
        name: "Lois Josca Danoes",
        role: "Direktur Utama",
        image: "https://i.ibb.co/5ZXmFKJ/Screenshot-2025-05-31-033547.png",
        dataAiHint: "male portrait"
    },
    {
        name: "Kasih M.M. Danoes",
        role: "Direktur Operasional",
        image: "https://i.ibb.co/ZRRd2YQL/Screenshot-2025-05-31-033607.png",
        dataAiHint: "man portrait"
    }
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">Sekilas Tentang Kami</h1>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">Sejak 2015, Cemerlang telah menjadi pionir dalam menyediakan material konstruksi berkualitas tinggi dan solusi inovatif untuk pembangunan infrastruktur Indonesia.</p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
          <p>
            Perjalanan kami lebih dari sekadar menyediakan produk; ini adalah tentang membangun fondasi masa depan Indonesia. Melalui <Link href="/tentang-kami/blog" className="text-primary hover:underline">Blog Kegiatan</Link> kami, Anda dapat mengikuti jejak langkah kami dalam berinteraksi dengan berbagai pemangku kepentingan dan mendemonstrasikan inovasi di lapangan. Setiap produk yang kami tawarkan didukung oleh <Link href="/tentang-kami/lisensi" className="text-primary hover:underline">lisensi dan sertifikasi</Link> yang ketat, menjadi jaminan atas kualitas dan keamanan yang tak tergoyahkan. Kepercayaan ini telah membawa kami untuk mengerjakan beragam <Link href="/tentang-kami/proyek" className="text-primary hover:underline">proyek strategis</Link> di seluruh negeri, dari jalan tol hingga bandara.
          </p>
          <p>
            Dedikasi kami tidak berhenti pada kualitas teknis. Kami sangat percaya bahwa kemajuan harus berjalan seimbang dengan kelestarian alam, yang tercermin dalam setiap <Link href="/tentang-kami/lingkungan" className="text-primary hover:underline">manfaat lingkungan</Link> dari produk dan proses kerja kami. Keberhasilan kami tidak terlepas dari kepercayaan para <Link href="/tentang-kami/klien-kami" className="text-primary hover:underline">klien kami</Link>, yang merupakan institusi dan perusahaan terkemuka di Indonesia. Kemitraan yang solid inilah yang terus mendorong kami untuk berinovasi dan memberikan yang terbaik, membangun negeri dengan semangat keunggulan dan integritas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mt-16">
            <Card className="shadow-lg">
                <CardHeader>
                    <Target className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="font-headline mt-4">Misi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">Menyediakan solusi infrastruktur yang inovatif, andal, dan berkelanjutan untuk mendukung pertumbuhan bangsa.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <Star className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="font-headline mt-4">Visi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">Menjadi mitra pilihan utama dalam industri konstruksi Indonesia yang dikenal karena kualitas, integritas, dan inovasi.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <Check className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="font-headline mt-4">Nilai Kami</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-justify">Kualitas, Integritas, Inovasi, Pelayanan Pelanggan, dan Keberlanjutan.</p>
                </CardContent>
            </Card>
        </div>
      </div>
      
      <div className="w-full bg-card">
        <div className="container py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold">Komitmen Kami pada Kualitas dan Pelayanan</h2>
                <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
                    Kami tidak hanya menyediakan produk, tetapi juga membangun kemitraan yang didasari oleh kepercayaan dan keunggulan.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <Users className="h-12 w-12 text-primary" />
                    <h3 className="font-headline text-xl font-semibold mt-4">Profesionalisme</h3>
                    <p className="mt-2 text-muted-foreground">Tim ahli kami yang berpengalaman memastikan setiap proyek ditangani dengan standar tertinggi, dari konsultasi hingga implementasi.</p>
                </div>
                <div className="flex flex-col items-center">
                    <ShieldCheck className="h-12 w-12 text-primary" />
                    <h3 className="font-headline text-xl font-semibold mt-4">Kualitas Terjamin</h3>
                    <p className="mt-2 text-muted-foreground">Kami menerapkan kontrol mutu yang ketat dan menggunakan teknologi terkini untuk menjamin hasil akhir yang tahan lama dan berkinerja maksimal.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Heart className="h-12 w-12 text-primary" />
                    <h3 className="font-headline text-xl font-semibold mt-4">Layanan Pelanggan</h3>
                    <p className="mt-2 text-muted-foreground">Komunikasi transparan dan dukungan teknis yang responsif adalah kunci kami untuk memastikan kepuasan dan kesuksesan proyek Anda.</p>
                </div>
            </div>
        </div>
      </div>

       <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold">Tim Manajemen Kami</h2>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
                Dipimpin oleh para profesional berpengalaman yang berdedikasi untuk mendorong perusahaan menuju kesuksesan.
            </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary shadow-lg">
                        <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} className="object-cover" />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-headline text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                </div>
            ))}
        </div>
       </div>
       <CtaBanner />
    </>
  );
}
