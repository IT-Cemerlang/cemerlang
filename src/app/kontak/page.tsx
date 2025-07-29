
"use client";

import CtaBanner from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">Hubungi Kami</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Punya pertanyaan atau ingin mendiskusikan proyek Anda? Kami siap membantu.</p>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
            <p>
                Di Cemerlang, kami percaya bahwa setiap proyek hebat dimulai dari sebuah percakapan. Kemitraan yang kuat dibangun di atas komunikasi yang terbuka dan transparan. Oleh karena itu, kami membuka semua saluran agar Anda dapat dengan mudah terhubung dengan kami. Apakah Anda memiliki pertanyaan teknis yang mendalam, ingin meminta penawaran untuk proyek besar, atau sekadar ingin tahu lebih banyak tentang solusi yang kami tawarkan, tim kami selalu siap untuk mendengarkan dan merespons dengan cepat.
            </p>
            <p>
                Kami memahami bahwa setiap kebutuhan berbeda. Untuk diskusi cepat dan responsif, silakan hubungi kami melalui WhatsApp. Untuk pertanyaan yang lebih detail atau pengiriman dokumen, email adalah saluran yang tepat. Tentu saja, kami juga siap menerima panggilan telepon Anda untuk percakapan yang lebih langsung. Jangan ragu untuk memilih cara yang paling nyaman bagi Anda. Bagi kami, setiap interaksi adalah langkah awal untuk membangun sesuatu yang luar biasa bersama.
            </p>
        </div>
      </div>
      <div className="container pt-0 pb-12 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Hubungi via WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <p className="text-muted-foreground mb-6">
                Scan QR code di bawah ini atau klik tombol untuk memulai percakapan dengan tim kami di WhatsApp.
              </p>
              <div className="p-4 border rounded-lg bg-white">
                <a href='https://wa.me/6287880571288' target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://storage2.me-qr.com/qr/228098180.png"
                    alt="QR Code WhatsApp"
                    width={250}
                    height={250}
                    data-ai-hint="qr code"
                  />
                </a>
              </div>
              <Button asChild size="lg" className="mt-8 w-full max-w-xs bg-green-500 hover:bg-green-600 text-white">
                <Link href="https://wa.me/6287880571288" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat di WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="shadow-lg">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-headline text-xl font-semibold">Alamat Kantor</h3>
                            <p className="text-muted-foreground">
                                PLAZA MEBEL #31-#35<br/>
                                Jl. RS Fatmawati KAV 5, Cipete Kebayoran Baru<br/>
                                Jakarta Selatan 10420
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 mt-6">
                        <Phone className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-headline text-xl font-semibold">Telepon</h3>
                            <p className="text-muted-foreground">
                            (021)38805294
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 mt-6">
                        <Mail className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-headline text-xl font-semibold">Email</h3>
                            <p className="text-muted-foreground">
                            info@cemerlang.pro
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d3965.990294302865!2d106.79447687499898!3d-6.265005861334032!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f198d90f63e3%3A0xa50fb13511deb14d!2sPlaza%20Mebel%20Fatmawati!5e0!3m2!1sen!2sid!4v1752554167265!5m2!1sen!2sid" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
