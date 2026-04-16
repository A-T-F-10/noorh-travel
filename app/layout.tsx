import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "نور الهدى للسفر والسياحة",
  description:
    "وكالة نور الهدى — وجهتك الموثوقة لتنظيم الرحلات والسفر بكل راحة وأمان. حجوزات طيران، رحلات سياحية، برامج عمرة وحج.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>{children}</body>
    </html>
  );
}
