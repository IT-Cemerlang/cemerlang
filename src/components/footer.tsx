
import Link from "next/link";
import Logo from "./logo";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.52.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.31 1.72v3.25h-3.9c-.66 0-1.3-.08-1.92-.23a4.72 4.72 0 0 1-1.6-1.09c-.53-.45-.98-.99-1.35-1.58v6.52a4.42 4.42 0 0 1-1.75 3.55c-1.11 1.11-2.7 1.65-4.3 1.72v-3.25a4.72 4.72 0 0 1 1.6-1.09c.53-.45.98-.99 1.35-1.58V1.99c-.01-.58-.13-1.16-.36-1.72a4.42 4.42 0 0 1-3.55-1.75C2.47 1.2.98 2.7.91 4.3v3.25h3.9c.66 0 1.3.08 1.92.23a4.72 4.72 0 0 1 1.6 1.09c.53-.45.98-.99 1.35 1.58v-6.52a4.42 4.42 0 0 1 1.75-3.55C11.41.88 11.96.34 12.52.02Z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t text-card-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="space-y-4 sm:col-span-3">
            <h4 className="font-headline font-semibold">Alamat</h4>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground max-w-xs text-justify">
                {`PLAZA MEBEL #31-#35 Jl. RS Fatmawati KAV 5, Cipete Kebayoran Baru Jakarta Selatan 10420`}
              </p>
              <p className="text-sm text-muted-foreground">
                  (021)38805294
              </p>
              <p className="text-sm text-muted-foreground">
                  info@cemerlang.pro
              </p>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link href="https://www.facebook.com/profile.php?id=61577741040817" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="https://www.instagram.com/group.cemerlang/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="https://www.tiktok.com/@cemerlangpro" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="https://www.youtube.com/@Cemerlang-pro" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="https://www.linkedin.com/in/cemerlang-group-289b60370/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
            </div>
          </div>

          <div className="sm:col-span-3">
              <h4 className="font-headline font-semibold mb-4">Tentang Kami</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/tentang-kami/sekilas-kami" className="text-muted-foreground hover:text-primary transition-colors">Sekilas Kami</Link></li>
                <li><Link href="/tentang-kami/proyek" className="text-muted-foreground hover:text-primary transition-colors">Proyek Kami</Link></li>
                <li><Link href="/tentang-kami/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog Kegiatan</Link></li>
                <li><Link href="/tentang-kami/lisensi" className="text-muted-foreground hover:text-primary transition-colors">Lisensi Produk</Link></li>
              </ul>
            </div>
            
            <div className="sm:col-span-3">
              <h4 className="font-headline font-semibold mb-4">Produk & Bantuan</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/produk" className="text-muted-foreground hover:text-primary transition-colors">Produk</Link></li>
                <li><Link href="/solusi" className="text-muted-foreground hover:text-primary transition-colors">Solusi</Link></li>
                <li><Link href="/dukungan-teknis" className="text-muted-foreground hover:text-primary transition-colors">Dukungan Teknis</Link></li>
                <li><Link href="/kontak" className="text-muted-foreground hover:text-primary transition-colors">Kontak</Link></li>
              </ul>
            </div>
          
          <div className="sm:col-span-3">
            <h4 className="font-headline font-semibold mb-4">Lokasi Kami</h4>
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d3965.990294302865!2d106.79447687499898!3d-6.265005861334032!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f198d90f63e3%3A0xa50fb13511deb14d!2sPlaza%20Mebel%20Fatmawati!5e0!3m2!1sen!2sid!4v1752554167265!5m2!1sen!2sid" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>Hak Cipta © {year} PT Cemerlang. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
