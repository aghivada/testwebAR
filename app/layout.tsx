import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darul Khikmah WebAR",
  description: "Aplikasi WebAR Gedung Darul Khikmah menggunakan Next.js dan Model Viewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}