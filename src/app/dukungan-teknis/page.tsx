
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, Clock, HelpCircle, FileText } from "lucide-react";
import CtaBanner from "@/components/cta-banner";
import Link from "next/link";

export default function TechnicalSupportPage() {
  const supportInfo = [
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Dukungan",
      content: "info@cemerlang.pro",
      description: "Dapatkan respon dalam 24 jam."
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Hotline Teknis",
      content: "(021)38805294",
      description: "Hubungi untuk bantuan segera."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Jam Operasional",
      content: "Senin - Jumat, 09:00 - 17:00 WIB",
      description: "Tim kami siap membantu Anda."
    }
  ];

  const faqItems = [
    {
      question: "Apa perbedaan utama antara Microsurfacing dan Slurry Seal?",
      answer: "Microsurfacing menggunakan polimer yang dimodifikasi secara kimia, memungkinkannya untuk diaplikasikan pada lapisan yang lebih tebal dan menyembuhkan lebih cepat. Ini membuatnya cocok untuk jalan dengan lalu lintas tinggi dan dapat dibuka untuk lalu lintas dalam waktu satu jam."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan produk Coldmix untuk kering sepenuhnya?",
      answer: "Coldmix dirancang untuk perbaikan cepat. Produk ini dapat menahan lalu lintas segera setelah pemadatan. Pengeringan penuh bergantung pada kondisi cuaca, tetapi biasanya mencapai kekuatan maksimal dalam 24-48 jam."
    },
    {
      question: "Apakah Ecobeton aman untuk lingkungan?",
      answer: "Ya, Ecobeton adalah solusi beton ramah lingkungan. Produk ini memiliki emisi karbon yang lebih rendah selama produksi dan aplikasi dibandingkan beton konvensional. Selain itu, daya tahannya yang tinggi mengurangi kebutuhan perbaikan di masa depan."
    },
    {
      question: "Kapan waktu yang tepat untuk menggunakan S.A.M.I Waterproofing?",
      answer: "S.A.M.I (Stress Absorbing Membrane Interlayer) sangat ideal digunakan pada struktur jembatan atau perkerasan beton sebelum lapisan aspal baru. Ini berfungsi untuk mencegah retak reflektif dan melindungi struktur di bawahnya dari penetrasi air."
    }
  ];

  const technicalResources = [
    {
      title: "Brosur Produk Lengkap",
      description: "Lihat katalog lengkap semua solusi yang kami tawarkan dalam format brosur digital.",
      link: "/documents/brosur-produk"
    },
    {
      title: "Panduan Aplikasi: Microsurfacing",
      description: "Pelajari panduan langkah-demi-langkah untuk aplikasi Microsurfacing yang benar dan efisien.",
      link: "/documents/panduan-aplikasi-microsurfacing"
    },
    {
      title: "TDS: SABDA SEAL CH™27",
      description: "Akses lembar data teknis lengkap untuk produk sealant andalan kami, Sabda Seal.",
      link: "/documents/tds-sabda-seal"
    }
  ]

  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">Pusat Bantuan & Dukungan Teknis</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Temukan jawaban, sumber daya, dan bantuan ahli untuk memastikan kesuksesan proyek Anda.</p>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
            <p>
                Di Cemerlang, komitmen kami tidak berhenti setelah produk terjual. Kami memahami bahwa keberhasilan sebuah proyek sangat bergantung pada aplikasi material yang tepat dan penanganan teknis yang benar di lapangan. Oleh karena itu, kami mendedikasikan halaman ini sebagai pusat bantuan terpadu untuk Anda. Kami percaya bahwa dukungan purna jual yang kuat adalah kunci untuk membangun kemitraan jangka panjang. Tim ahli kami selalu siap sedia untuk memberikan panduan, menjawab pertanyaan, dan membantu Anda mengatasi setiap tantangan teknis yang mungkin timbul.
            </p>
            <p>
                Baik Anda memerlukan bantuan cepat melalui telepon, jawaban atas pertanyaan umum melalui FAQ kami, atau dokumen teknis yang mendalam untuk perencanaan proyek, semua sumber daya yang Anda butuhkan ada di sini. Halaman ini dirancang untuk memberdayakan tim Anda dengan pengetahuan yang diperlukan untuk memaksimalkan performa produk kami. Manfaatkan pusat bantuan ini untuk memastikan setiap aplikasi berjalan lancar, efisien, dan sesuai dengan standar kualitas tertinggi yang Anda harapkan dari Cemerlang.
            </p>
        </div>
      </div>
      <div className="container pt-0 pb-12 md:pb-24">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            {supportInfo.map((item, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center p-6">
                    <div className="mb-4">{item.icon}</div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                        <p className="text-lg">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                </Card>
            ))}
        </div>

        <div className="mt-20">
            <div className="text-center mb-12">
                <HelpCircle className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 font-headline text-3xl font-bold">Pertanyaan yang Sering Diajukan (FAQ)</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Temukan jawaban cepat untuk pertanyaan teknis yang paling umum.</p>
            </div>
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>

        <div className="mt-20">
            <div className="text-center mb-12">
                <FileText className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 font-headline text-3xl font-bold">Sumber Daya Teknis</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Akses dokumen teknis, brosur produk, dan panduan aplikasi kami.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {technicalResources.map((resource, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                            <Button asChild variant="secondary" className="w-full">
                                <Link href={resource.link}>Lihat Dokumen</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
