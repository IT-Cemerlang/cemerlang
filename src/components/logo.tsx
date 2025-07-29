import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center" prefetch={false}>
      <Image
        src="https://i.ibb.co/gY7zzWL/Logo-cemerlang-Ok-removebg-preview.png"
        alt="Cemerlang Logo"
        width={200}
        height={45}
        priority
        className="w-auto h-12"
      />
    </Link>
  );
}
