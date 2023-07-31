import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Nguyễn Minh Huy",
  description: "Profile - Nguyễn Minh Huy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-[120vh] min-w-full bg-sky-900">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
