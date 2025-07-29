
"use client";

import { products } from "@/lib/products";
import Image from "next/image";
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/logo";

export default function ProductBrochurePage() {
    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div className="bg-background">
            <div className="bg-card py-8">
                <div className="container flex justify-between items-center">
                    <Logo />
                    <div className="text-right">
                        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">Brosur Produk</h1>
                        <p className="text-muted-foreground">Solusi Inovatif untuk Infrastruktur Indonesia</p>
                    </div>
                </div>
            </div>

            <div className="container py-12 md:py-16">
                 <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify mb-12">
                    <p>
                        Selamat datang di katalog lengkap Cemerlang, di mana setiap produk adalah hasil dari riset mendalam, inovasi teknologi, dan komitmen kami terhadap kualitas tanpa kompromi. Kami menghadirkan rangkaian solusi material yang dirancang tidak hanya untuk memenuhi, tetapi untuk melampaui standar industri. Jelajahi solusi kami dan temukan bagaimana Cemerlang dapat menjadi mitra andal dalam mewujudkan proyek Anda dengan fondasi yang kokoh dan hasil akhir yang membanggakan.
                    </p>
                </div>

                {categories.map(category => (
                    <div key={category} className="mb-16">
                        <h2 className="font-headline text-2xl md:text-3xl font-bold mb-8 border-l-4 border-primary pl-4">{category}</h2>
                        <div className="space-y-8">
                            {products.filter(p => p.category === category).map((product) => (
                                <Card key={product.id} className="overflow-hidden shadow-md grid md:grid-cols-3 items-center">
                                    <div className="md:col-span-1">
                                        <Image
                                          src={product.image}
                                          alt={product.name}
                                          width={400}
                                          height={400}
                                          className="aspect-square w-full object-cover"
                                          data-ai-hint={product.dataAiHint}
                                        />
                                    </div>
                                    <div className="md:col-span-2 p-6">
                                        <CardTitle className="font-headline text-xl mb-2">{product.name}</CardTitle>
                                        <CardDescription>{product.description}</CardDescription>
                                        {product.details && (
                                            <div className="mt-4 text-sm text-muted-foreground">
                                                <h4 className="font-semibold text-card-foreground mb-2">Manfaat Utama:</h4>
                                                <ul className="list-disc list-inside space-y-1">
                                                    {product.details.benefits.slice(0, 3).map((benefit, i) => <li key={i}>{benefit}</li>)}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <CtaBanner />
        </div>
    );
}
