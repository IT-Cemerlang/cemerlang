
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { products } from "@/lib/products";
import { Product } from "@/lib/types";
import Image from "next/image";
import { CheckCircle, Info, ShoppingCart } from "lucide-react";
import CtaBanner from "@/components/cta-banner";

export default function ProductsPage() {
  const categories = [...new Set(products.map(p => p.category))];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">Produk Kami</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Menyediakan solusi material konstruksi berkualitas tinggi yang dirancang untuk performa dan daya tahan maksimal.</p>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
            <p>
                Selamat datang di katalog lengkap Cemerlang, di mana setiap produk adalah hasil dari riset mendalam, inovasi teknologi, dan komitmen kami terhadap kualitas tanpa kompromi. Kami memahami bahwa setiap proyek konstruksi memiliki tantangan uniknya sendiri. Oleh karena itu, kami menghadirkan rangkaian solusi material yang dirancang tidak hanya untuk memenuhi, tetapi untuk melampaui standar industri. Dari pemeliharaan jalan raya yang padat hingga proyek infrastruktur berskala besar, produk kami dikembangkan untuk memberikan performa maksimal, daya tahan jangka panjang, dan efisiensi aplikasi di lapangan.
            </p>
            <p>
                Di halaman ini, Anda akan menemukan berbagai kategori produk unggulan kami, mulai dari Microsurfacing yang inovatif, Sealant yang fleksibel, hingga Coldmix yang praktis. Setiap produk disertai dengan informasi detail untuk membantu Anda membuat keputusan yang tepat. Jelajahi solusi kami dan temukan bagaimana Cemerlang dapat menjadi mitra andal dalam mewujudkan proyek Anda dengan fondasi yang kokoh dan hasil akhir yang membanggakan.
            </p>
        </div>
      </div>
      <div className="container pt-0 pb-12 md:pb-24">
        {categories.map(category => (
          <div key={category} className="mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-8 border-l-4 border-primary pl-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.filter(p => p.category === category).map((product) => (
                <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="aspect-[9/16] w-full object-cover"
                      data-ai-hint={product.dataAiHint}
                    />
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                        {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <CardDescription className="mt-2 text-sm">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto p-6 pt-0">
                    <Button className="w-full" variant="outline" onClick={() => handleProductClick(product)}>
                        Produk Selengkapnya
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

       {selectedProduct && selectedProduct.details && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-headline text-2xl md:text-3xl">{selectedProduct.name}</DialogTitle>
                    <DialogDescription className="text-base pt-2 text-justify">
                      {selectedProduct.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-6">
                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-3 border-b pb-2">Manfaat & Kegunaan Produk</h3>
                        <ul className="space-y-2 list-inside">
                            {selectedProduct.details.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 border-b pb-2">Kandungan Produk</h3>
                        <p className="text-muted-foreground">{selectedProduct.details.composition}</p>
                    </div>

                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-3 border-b pb-2">Cara Pemakaian Produk</h3>
                        <ol className="space-y-2 list-decimal list-inside">
                            {selectedProduct.details.application.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>

                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 border-b pb-2">Cara Mendapatkan Produk</h3>
                        <div className="flex items-start p-4 bg-secondary rounded-lg">
                           <Info className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                           <p className="text-muted-foreground">{selectedProduct.details.orderingGuide}</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
      )}
      <CtaBanner />
    </>
  );
}
