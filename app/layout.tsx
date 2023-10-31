import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " trucommerce beta",
  description: "Welcome to trucommerce beta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
