
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, FileText, Info } from "lucide-react";


export default function TdsSabdaSealPage() {

    const technicalData = [
        { property: "Basis Material", value: "Aspal Emulsi Modifikasi Polimer" },
        { property: "Warna", value: "Hitam" },
        { property: "Bentuk", value: "Cairan Kental (Pasta)" },
        { property: "Waktu Kering Sentuh (Touch Dry)", value: "2 - 4 jam @ 30°C" },
        { property: "Waktu Kering Sempurna (Full Cure)", value: "24 - 48 jam" },
        { property: "Suhu Aplikasi", value: "5°C hingga 45°C" },
        { property: "Daya Lekat pada Beton/Aspal", value: "Sangat Baik" },
        { property: "Fleksibilitas", value: "Baik, mampu mengakomodasi pergerakan minor" },
        { property: "Ketahanan Air", value: "Sangat Baik setelah kering sempurna" },
        { property: "Kemasan", value: "Pail 20 Kg" },
        { property: "Masa Simpan", value: "12 bulan dalam kemasan tertutup rapat" },
    ];

    const benefits = [
        "Mencegah penetrasi air dan kotoran yang merusak struktur perkerasan.",
        "Menjaga elastisitas sambungan pada berbagai kondisi cuaca.",
        "Memiliki daya lekat yang kuat pada berbagai jenis permukaan (beton dan aspal).",
        "Aplikasi mudah dan tidak memerlukan pemanasan (cold applied).",
        "Efektif dari segi biaya untuk pemeliharaan perkerasan."
    ];

    return (
        <>
            <div className="bg-card py-12 md:py-24">
                <div className="container text-center">
                    <FileText className="mx-auto h-16 w-16 text-primary" />
                    <h1 className="font-headline text-3xl md:text-4xl font-bold mt-4">Technical Data Sheet</h1>
                    <p className="mt-2 text-muted-foreground text-2xl font-semibold">SABDA SEAL CH™27</p>
                </div>
            </div>

            <div className="container py-12 md:py-16">
                <div className="max-w-4xl mx-auto">

                    <Card className="mb-12 shadow-lg">
                        <CardHeader>
                            <CardTitle>Deskripsi Produk</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground text-justify">
                            <p>
                                SABDA SEAL CH™27 adalah bahan penutup celah (sealant) elastis berbahan dasar aspal emulsi yang dimodifikasi polimer. Produk ini dirancang khusus untuk mengisi dan melindungi sambungan pada perkerasan beton (rigid pavement) dan perkerasan aspal (flexible pavement). Aplikasinya yang mudah tanpa pemanasan (cold-applied) menjadikannya solusi yang praktis dan aman untuk berbagai proyek pemeliharaan jalan, jembatan, dan area parkir.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="mb-12 shadow-lg">
                        <CardHeader>
                            <CardTitle>Manfaat & Kegunaan</CardTitle>
                            <CardDescription>
                                Produk ini direkomendasikan untuk mengisi celah dan sambungan pada:
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="mb-12 shadow-lg">
                        <CardHeader>
                            <CardTitle>Data Teknis</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[40%]">Properti</TableHead>
                                        <TableHead>Nilai/Keterangan</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {technicalData.map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{data.property}</TableCell>
                                            <TableCell>{data.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Panduan Aplikasi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                <li>
                                    <span className="font-semibold text-card-foreground">Persiapan Sambungan:</span> Pastikan sambungan atau celah bersih dari debu, kotoran, minyak, dan material lepas lainnya. Gunakan sikat kawat atau kompresor udara. Sambungan harus kering.
                                </li>
                                <li>
                                    <span className="font-semibold text-card-foreground">Pemasangan Backer Rod:</span> Jika kedalaman sambungan melebihi 1.5 cm, pasang backer rod (busa silinder) untuk mengontrol kedalaman sealant dan mencegah pemborosan.
                                </li>
                                <li>
                                    <span className="font-semibold text-card-foreground">Aplikasi:</span> Tuangkan atau aplikasikan SABDA SEAL CH™27 ke dalam sambungan secara merata. Pastikan sealant mengisi penuh celah tanpa ada rongga udara.
                                </li>
                                <li>
                                    <span className="font-semibold text-card-foreground">Perataan:</span> Ratakan permukaan sealant menggunakan kape atau alat serupa.
                                </li>
                                <li>
                                    <span className="font-semibold text-card-foreground">Pengeringan:</span> Biarkan sealant mengering sesuai waktu yang tertera pada data teknis. Lindungi area dari lalu lintas dan air selama proses pengeringan awal.
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                    
                     <Card className="mt-16 bg-secondary">
                        <CardContent className="p-6 flex items-start gap-4">
                            <Info className="h-8 w-8 mt-1 flex-shrink-0 text-primary" />
                            <div>
                                <h3 className="font-headline text-xl font-bold">Penyimpanan & Keselamatan</h3>
                                <p className="mt-1 text-muted-foreground">
                                    Simpan produk di tempat yang sejuk dan kering, terhindar dari sinar matahari langsung dan suhu beku. Gunakan alat pelindung diri (sarung tangan dan kacamata) selama aplikasi. Jika terkena kulit, segera cuci dengan air bersih.
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
