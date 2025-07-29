
import CtaBanner from "@/components/cta-banner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPostsData } from "@/lib/blog";

const sortedBlogPosts = [...blogPostsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogPage() {
  return (
    <>
      <div className="bg-card py-12 md:py-24">
        <div className="container">
          <div className="text-center">
              <h1 className="font-headline text-3xl md:text-4xl font-bold">Blog Kegiatan</h1>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Ikuti berita terbaru, studi kasus, dan kegiatan dari Cemerlang.</p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-justify">
          <p>
            Selamat datang di pusat informasi dan kegiatan Cemerlang. Di halaman ini, kami berbagi lebih dari sekadar pembaruan proyek. Kami mengajak Anda untuk melihat lebih dekat bagaimana kami menjalin kemitraan strategis melalui audiensi dengan berbagai dinas pemerintah, mendemonstrasikan inovasi produk kami secara langsung melalui sesi mockup, hingga komitmen kami terhadap standar kualitas tertinggi dengan pengujian di laboratorium independen. Setiap cerita adalah bukti dedikasi kami untuk membangun infrastruktur Indonesia.
          </p>
          <p>
            Blog ini adalah jendela ke dalam operasi kami sehari-hari, menunjukkan bagaimana kami secara proaktif mendekati tantangan konstruksi dan berkolaborasi untuk menemukan solusi terbaik. Telusuri artikel-artikel kami untuk mendapatkan wawasan tentang teknologi terbaru dalam industri, melihat studi kasus dari implementasi produk kami di lapangan, dan mengikuti perjalanan kami dalam berkontribusi pada kemajuan bangsa. Kami berharap cerita-cerita ini dapat memberikan inspirasi dan informasi yang berharga bagi Anda.
          </p>
        </div>
      </div>

      <div className="container pt-0 pb-12 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedBlogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader className="p-0">
                <Link href={`/tentang-kami/blog/${post.slug}`}>
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={400}
                        className="w-full object-cover aspect-[9/16]"
                        data-ai-hint={post.dataAiHint}
                    />
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{post.displayDate}</p>
                <CardTitle className="font-headline text-xl leading-snug">
                    <Link href={`/tentang-kami/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                    </Link>
                </CardTitle>
                <CardDescription className="mt-3">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/tentang-kami/blog/${post.slug}`} className="font-semibold text-primary hover:underline">
                  Baca Selengkapnya <ArrowRight className="inline h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
