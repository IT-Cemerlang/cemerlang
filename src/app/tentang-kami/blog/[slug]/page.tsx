
import { notFound } from "next/navigation";
import { blogPostsData } from "@/lib/blog";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CtaBanner from "@/components/cta-banner";

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{objectFit: "cover"}}
          className="z-0"
          data-ai-hint={post.dataAiHint}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container relative z-20 flex flex-col justify-end h-full pb-12 text-white">
          <p className="text-lg text-muted-foreground mb-2">{post.displayDate}</p>
          <h1 className="font-headline text-3xl md:text-5xl font-bold max-w-4xl">{post.title}</h1>
        </div>
      </div>
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground text-justify space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <div className="mt-12 pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/tentang-kami/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Semua Kegiatan
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
