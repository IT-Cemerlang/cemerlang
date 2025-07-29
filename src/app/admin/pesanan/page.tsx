
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function AdminOrdersPage() {
  return (
    <div className="container py-12">
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pesanan Masuk</CardTitle>
          <CardDescription>Berikut adalah semua pesanan yang telah dibuat oleh pelanggan.</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
            <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold">Fitur Dinonaktifkan</h3>
            <p className="text-muted-foreground mt-2">
                Halaman ini memerlukan koneksi ke database dan belum dikonfigurasi.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
