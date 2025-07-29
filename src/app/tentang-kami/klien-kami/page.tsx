
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const clients = [
  { name: "Adhi Karya", logo: "https://i.ibb.co/8D7fhDWL/5.png", dataAiHint: "company logo" },
  { name: "Angkasa Pura Airport", logo: "https://i.ibb.co/GQQk1sDN/ANGKASA-PURA-AIRPORT.png", dataAiHint: "company logo" },
  { name: "Angkasa Pura II", logo: "https://i.ibb.co/8nKhTTKx/Angkasa-Pura-II.jpg", dataAiHint: "company logo" },
  { name: "Hutama Karya", logo: "https://i.ibb.co/jPTGTWvC/14.png", dataAiHint: "company logo" },
  { name: "Jasa Marga", logo: "https://i.ibb.co/BV5135Jd/11.png", dataAiHint: "company logo" },
  { name: "Jasa Marga Bali", logo: "https://i.ibb.co/wNhVzbwf/12.png", dataAiHint: "company logo" },
  { name: "Jasa Marga Balikpapan Samarinda", logo: "https://i.ibb.co/sJ9yLG1M/15.png", dataAiHint: "company logo" },
  { name: "Jasa Marga Manado-Bitung", logo: "https://i.ibb.co/mrycGnTc/16.png", dataAiHint: "company logo" },
  { name: "Jaya Konstruksi", logo: "https://i.ibb.co/11M5bhT/17.png", dataAiHint: "company logo" },
  { name: "Kementerian Perhubungan", logo: "https://i.ibb.co/351BVbKB/3.png", dataAiHint: "company logo" },
  { name: "Marga Sarana Jabar", logo: "https://i.ibb.co/Jjg14BGc/Marga-Sarana-Jabar.jpg", dataAiHint: "company logo" },
  { name: "Nindya Karya", logo: "https://i.ibb.co/JWShgXjG/19.png", dataAiHint: "company logo" },
  { name: "PP", logo: "https://i.ibb.co/7JfmH4py/6.png", dataAiHint: "company logo" },
  { name: "Sentul Circuit International", logo: "https://i.ibb.co/h1t906PD/20.png", dataAiHint: "company logo" },
  { name: "Sentul Kart Racing", logo: "https://i.ibb.co/GfLYr8LL/21.png", dataAiHint: "company logo" },
  { name: "STIN", logo: "https://i.ibb.co/qqGYD83/7.png", dataAiHint: "company logo" },
  { name: "Total Bangun Persada", logo: "https://i.ibb.co/DH3WBSsC/22.png", dataAiHint: "company logo" },
  { name: "Waskita Karya", logo: "https://i.ibb.co/CsTrFfVn/23.png", dataAiHint: "company logo" },
];


export default function ClientsPage() {
  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
              <h1 className="font-headline text-3xl md:text-4xl font-bold">Klien Kami</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-2">
              Kami bangga telah bekerja sama dengan berbagai perusahaan dan organisasi terkemuka di berbagai sektor industri. Kepercayaan mereka adalah bukti komitmen kami terhadap kualitas dan keunggulan layanan.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
            <p>
                Bagi kami, daftar klien ini lebih dari sekadar portofolio; ini adalah sebuah galeri kepercayaan. Setiap nama merepresentasikan sebuah kemitraan yang dibangun di atas fondasi integritas, kualitas, dan tujuan bersama. Kami memahami bahwa setiap proyek adalah investasi penting bagi klien kami, dan kepercayaan yang mereka berikan kepada kami untuk menjadi bagian dari investasi tersebut adalah sebuah kehormatan besar. Kami berupaya untuk membalas kepercayaan ini dengan memberikan hasil yang tidak hanya memenuhi, tetapi melampaui ekspektasi.
            </p>
            <p>
                Keragaman klien kami, yang mencakup badan usaha milik negara (BUMN), kementerian, perusahaan swasta nasional, hingga pengelola fasilitas internasional, menunjukkan kemampuan adaptasi dan fleksibilitas kami. Kami mampu memenuhi berbagai standar teknis yang ketat dan beroperasi dalam lingkungan kerja yang berbeda-beda. Kolaborasi dengan para pemimpin di industrinya masing-masing ini tidak hanya memperkaya pengalaman kami, tetapi juga terus mendorong kami untuk berinovasi dan mempertahankan standar keunggulan tertinggi dalam setiap layanan yang kami berikan.
            </p>
        </div>
      </div>
      <div className="container pt-0 pb-12 md:pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                        <Image
                            src={client.logo}
                            alt={client.name}
                            width={400}
                            height={400}
                            className="aspect-square w-full object-contain p-8"
                            data-ai-hint={client.dataAiHint}
                        />
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                        <CardTitle className="text-xl h-12 flex items-center justify-center">{client.name}</CardTitle>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
