
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, FileText, Settings, ShieldCheck, Thermometer } from "lucide-react";

export default function MicrosurfacingGuidePage() {

    const steps = [
        {
            title: "Tahap 1: Penilaian dan Persiapan Permukaan",
            content: "Langkah awal yang krusial adalah membersihkan permukaan jalan dari segala jenis kotoran, debu, minyak, dan vegetasi. Perbaiki semua kerusakan struktural seperti lubang atau retak yang dalam sebelum aplikasi. Permukaan harus kering dan dalam kondisi baik untuk memastikan daya lekat yang maksimal."
        },
        {
            title: "Tahap 2: Kalibrasi Mesin dan Pencampuran",
            content: "Gunakan mesin paver Microsurfacing yang telah dikalibrasi dengan benar. Pastikan semua komponen (agregat, aspal emulsi polimer, air, dan aditif) dicampur sesuai dengan Job Mix Formula (JMF) yang telah disetujui untuk proyek tersebut. Konsistensi campuran adalah kunci untuk hasil akhir yang seragam."
        },
        {
            title: "Tahap 3: Aplikasi Hamparan",
            content: "Aplikasikan campuran Microsurfacing secara merata menggunakan spreader box. Jaga kecepatan mesin paver agar tetap konstan untuk mencapai ketebalan lapisan yang diinginkan dan seragam. Hindari berhenti di tengah-tengah hamparan untuk mencegah sambungan yang tidak rata."
        },
        {
            title: "Tahap 4: Proses Pengeringan (Curing)",
            content: "Setelah diaplikasikan, campuran akan melalui proses pengeringan kimia. Waktu pengeringan bervariasi tergantung pada kondisi cuaca (suhu dan kelembaban), namun biasanya lalu lintas dapat dibuka kembali dalam 1 hingga 2 jam. Lindungi area dari lalu lintas selama proses ini."
        },
        {
            title: "Tahap 5: Kontrol Kualitas dan Pembukaan Lalu Lintas",
            content: "Lakukan pemeriksaan visual untuk memastikan tidak ada cacat seperti segregasi atau permukaan yang tidak rata. Setelah dipastikan kering dan cukup kuat, area tersebut dapat dibuka kembali untuk lalu lintas umum. Kualitas permukaan akan terus meningkat seiring waktu."
        }
    ];

    return (
        <>
            <div className="bg-card py-12 md:py-24">
                <div className="container text-center">
                    <FileText className="mx-auto h-16 w-16 text-primary" />
                    <h1 className="font-headline text-3xl md:text-4xl font-bold mt-4">Panduan Aplikasi Microsurfacing</h1>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Panduan langkah-demi-langkah untuk memastikan aplikasi Microsurfacing yang sukses dan berkualitas tinggi.</p>
                </div>
            </div>

            <div className="container py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <Card className="mb-12 shadow-lg">
                        <CardHeader>
                            <CardTitle>Pendahuluan</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground text-justify space-y-4">
                            <p>
                                Microsurfacing adalah teknik pelapisan ulang permukaan jalan yang sangat efektif dan efisien. Ini adalah campuran dari agregat pilihan, aspal emulsi yang dimodifikasi polimer, air, dan aditif khusus yang dicampur di lokasi dan dihamparkan pada permukaan jalan yang ada. Aplikasi yang benar sangat penting untuk mencapai semua manfaatnya, termasuk memperpanjang umur jalan, meningkatkan keselamatan, dan memperbaiki penampilan.
                            </p>
                             <p>
                                Panduan ini bertujuan untuk memberikan gambaran umum tentang langkah-langkah kunci dalam proses aplikasi Microsurfacing. Untuk setiap proyek, penting untuk selalu mengacu pada spesifikasi teknis dan Job Mix Formula (JMF) yang spesifik.
                            </p>
                        </CardContent>
                    </Card>

                    <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-10">Langkah-Langkah Aplikasi</h2>

                    <div className="space-y-8 relative">
                        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-border -z-10"></div>
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold z-10">{index + 1}</div>
                                <div className="flex-1">
                                    <h3 className="font-headline text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mt-16 mb-10">Faktor Kunci Keberhasilan</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card className="p-6">
                            <Thermometer className="mx-auto h-10 w-10 text-primary mb-4" />
                            <h3 className="font-headline text-lg font-semibold">Kondisi Cuaca</h3>
                            <p className="text-sm text-muted-foreground mt-2">Hindari aplikasi saat hujan atau suhu di bawah 10°C. Cuaca panas dan kering akan mempercepat proses pengeringan.</p>
                        </Card>
                        <Card className="p-6">
                            <Settings className="mx-auto h-10 w-10 text-primary mb-4" />
                            <h3 className="font-headline text-lg font-semibold">Peralatan Terkalibrasi</h3>
                            <p className="text-sm text-muted-foreground mt-2">Pastikan mesin paver dalam kondisi baik dan terkalibrasi untuk menjamin proporsi campuran yang akurat.</p>
                        </Card>
                        <Card className="p-6">
                            <ShieldCheck className="mx-auto h-10 w-10 text-primary mb-4" />
                            <h3 className="font-headline text-lg font-semibold">Tim Berpengalaman</h3>
                            <p className="text-sm text-muted-foreground mt-2">Operator dan tim yang terlatih sangat penting untuk mengatasi tantangan di lapangan dan memastikan hasil yang berkualitas.</p>
                        </Card>
                    </div>

                     <Card className="mt-16 bg-destructive text-destructive-foreground">
                        <CardContent className="p-6 flex items-start gap-4">
                            <AlertTriangle className="h-8 w-8 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-headline text-xl font-bold">Peringatan Penting</h3>
                                <p className="mt-1 text-destructive-foreground/80">
                                    Panduan ini bersifat umum. Selalu konsultasikan dengan tim teknis Cemerlang dan mengacu pada lembar data teknis (TDS) produk spesifik sebelum memulai pekerjaan.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
            <CtaBanner />
        </>
    );
}
