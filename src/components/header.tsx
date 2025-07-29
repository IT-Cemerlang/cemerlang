
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";


const aboutUsLinksData = [
  {
    title: "Sekilas Kami",
    href: "/tentang-kami/sekilas-kami",
    description: "Kenali lebih dalam tentang visi, misi, dan nilai-nilai yang kami anut.",
  },
  {
    title: "Blog Kegiatan",
    href: "/tentang-kami/blog",
    description: "Ikuti berita terbaru, studi kasus, dan kegiatan dari Cemerlang.",
  },
  {
    title: "Lisensi Produk",
    href: "/tentang-kami/lisensi",
    description: "Lihat sertifikasi dan lisensi yang menjamin kualitas produk kami.",
  },
  {
    title: "Proyek Kami",
    href: "/tentang-kami/proyek",
    description: "Jelajahi portofolio proyek yang telah kami selesaikan dengan sukses.",
  },
  {
    title: "Manfaat Lingkungan",
    href: "/tentang-kami/lingkungan",
    description: "Pelajari komitmen kami terhadap praktik konstruksi yang ramah lingkungan.",
  },
  {
    title: "Klien Kami",
    href: "/tentang-kami/klien-kami",
    description: "Daftar klien yang telah mempercayakan proyeknya kepada kami.",
  },
];

const mainNavLinks = [
    { title: "Beranda", href: "/" },
    { title: "Produk", href: "/produk" },
    { title: "Solusi", href: "/solusi" },
    { title: "Dukungan Teknis", href: "/dukungan-teknis" },
    { title: "Kontak", href: "/kontak" },
];


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


function MobileNav({ isSheetOpen, setIsSheetOpen }: { isSheetOpen: boolean, setIsSheetOpen: (isOpen: boolean) => void }) {
    return (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Buka Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[400px] p-0">
              <div className="p-4 flex justify-between items-center border-b">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                      <X className="h-6 w-6" />
                  </Button>
              </div>
            <ScrollArea className="flex-grow">
              <nav className="flex flex-col gap-4 p-4">
                {mainNavLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsSheetOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                ))}
                <div className="pt-2">
                    <p className="text-lg font-medium">Tentang Kami</p>
                    <div className="flex flex-col gap-3 mt-2 pl-2 border-l">
                        {aboutUsLinksData.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsSheetOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
    )
}

function DesktopNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {mainNavLinks.slice(0, 1).map(link => (
                    <NavigationMenuItem key={link.href}>
                        <Link href={link.href} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {link.title}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Tentang Kami</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {aboutUsLinksData.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {mainNavLinks.slice(1).map(link => (
                    <NavigationMenuItem key={link.href}>
                        <Link href={link.href} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {link.title}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}

            </NavigationMenuList>
        </NavigationMenu>
    )
}


export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden md:flex">
            <DesktopNav />
        </div>
        <div className="md:hidden">
            <MobileNav isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
        </div>
      </div>
    </header>
  );
}
