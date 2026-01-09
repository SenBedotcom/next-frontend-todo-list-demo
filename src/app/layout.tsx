import type { Metadata } from "next";
import { Outfit, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "🌸 Todo List | จัดการงานสุดคาวาอิ",
  description: "แอพจัดการงานสไตล์ญี่ปุ่น น่ารักๆ สร้างด้วย Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${outfit.variable} ${mPlusRounded.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
