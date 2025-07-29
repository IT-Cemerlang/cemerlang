"use client";

import { useEffect, useRef, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setHasCameraPermission(false);
        return;
      }
      
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
      }
    };

    getCameraPermission();
  }, []);

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <Video className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="font-headline text-3xl mt-4">Akses Kamera</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="w-full aspect-video rounded-md bg-muted overflow-hidden border">
              <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
            </div>

            {hasCameraPermission === false && (
              <Alert variant="destructive">
                <AlertTitle>Akses Kamera Diperlukan</AlertTitle>
                <AlertDescription>
                  Aplikasi ini memerlukan izin untuk menggunakan kamera Anda. Silakan periksa pengaturan izin di browser Anda.
                </AlertDescription>
              </Alert>
            )}

            {hasCameraPermission === null && (
                <div className="text-center text-muted-foreground">
                    <p>Meminta izin akses kamera...</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
