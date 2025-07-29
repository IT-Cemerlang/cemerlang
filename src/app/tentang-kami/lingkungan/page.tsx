
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, Wind, Droplet } from "lucide-react";
import Image from "next/image";

const commitments = [
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: "Bahan Baku Berkelanjutan",
    description: "Kami memprioritaskan penggunaan bahan baku yang dapat didaur ulang dan berasal dari sumber yang bertanggung jawab untuk meminimalkan dampak ekologis."
  },
  {
    icon: <Wind className="w-10 h-10 text-primary" />,
    title: "Mengurangi Emisi Karbon",
    description: "Produk seperti Coldmix dan Ecobeton kami diproduksi dengan proses yang menghasilkan emisi lebih rendah dibandingkan metode konvensional."
  },
  {
    icon: <Recycle className="w-10 h-10 text-primary" />,
    title: "Aplikasi Hemat Energi",
    description: "Teknik aplikasi produk kami, seperti Microsurfacing, tidak memerlukan pemanasan tinggi, sehingga secara signifikan mengurangi konsumsi energi di lapangan."
  },
  {
    icon: <Droplet className="w-10 h-10 text-primary" />,
    title: "Konservasi Air",
    description: "Inovasi dalam formulasi produk kami bertujuan untuk mengurangi penggunaan air selama proses pencampuran dan aplikasi."
  }
]

export default function EnvironmentalPage() {
  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
              <h1 className="font-headline text-3xl md:text-4xl font-bold">Manfaat Lingkungan</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-2">
              Di Cemerlang, kami percaya bahwa kemajuan infrastruktur harus berjalan seiring dengan pelestarian lingkungan. Kami berdedikasi untuk mengembangkan dan menyediakan solusi konstruksi yang tidak hanya unggul dalam performa tetapi juga bertanggung jawab terhadap planet kita.
            </p>
          </div>
        </div>
      </div>

       <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
          <p>
            Komitmen kami terhadap keberlanjutan tertanam dalam setiap aspek bisnis kami. Kami melihat tanggung jawab lingkungan bukan sebagai kewajiban, melainkan sebagai peluang untuk berinovasi dan memimpin industri konstruksi menuju masa depan yang lebih hijau. Dengan memilih produk Cemerlang, Anda tidak hanya mendapatkan solusi infrastruktur yang andal, tetapi juga menjadi bagian dari gerakan positif untuk mengurangi jejak ekologis. Kami secara aktif meneliti dan mengembangkan material yang memanfaatkan sumber daya secara efisien, mengurangi limbah, dan menurunkan emisi karbon.
          </p>
          <p>
            Pendekatan kami holistik. Mulai dari pemilihan bahan baku yang lebih ramah lingkungan, proses produksi yang hemat energi, hingga metode aplikasi di lapangan yang meminimalkan dampak—semua dirancang dengan mempertimbangkan kelestarian bumi. Kami percaya bahwa membangun infrastruktur yang kuat untuk generasi sekarang tidak boleh mengorbankan kesejahteraan planet untuk generasi yang akan datang. Halaman ini akan menguraikan bagaimana setiap produk dan layanan kami dirancang untuk memberikan manfaat nyata bagi lingkungan, membuktikan bahwa konstruksi modern dapat selaras dengan alam.
          </p>
        </div>
      </div>

      <div className="container pt-0 pb-12 md:pb-24">
        <div className="mt-12">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold">Komitmen Kami pada Keberlanjutan</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Empat pilar utama yang menjadi dasar dari setiap inovasi produk dan layanan kami.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {commitments.map((item, index) => (
                    <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <CardHeader className="flex flex-col items-center">
                            {item.icon}
                            <CardTitle className="mt-4 font-headline text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="max-w-4xl mx-auto mt-16 text-muted-foreground space-y-4 text-justify">
              <p>
                Inisiatif keberlanjutan kami tidak berhenti pada produk. Kami secara aktif mengintegrasikan praktik ramah lingkungan di seluruh rantai operasi kami, mulai dari optimalisasi logistik untuk mengurangi jejak karbon hingga pengelolaan limbah produksi yang bertanggung jawab. Kami percaya bahwa setiap langkah kecil dalam proses operasional dapat memberikan dampak besar bagi kelestarian lingkungan.
              </p>
              <p>
                Kami juga berinvestasi dalam penelitian dan pengembangan berkelanjutan untuk terus menciptakan inovasi hijau di masa depan. Kemitraan dengan berbagai lembaga riset dan akademisi menjadi kunci bagi kami untuk tetap menjadi yang terdepan dalam teknologi konstruksi berkelanjutan. Dengan demikian, kami tidak hanya membangun infrastruktur yang kuat hari ini, tetapi juga meletakkan fondasi yang lebih baik untuk generasi mendatang.
              </p>
            </div>
        </div>

      </div>
      <CtaBanner />
    </>
  );
}
