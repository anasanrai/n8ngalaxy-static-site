import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "n8nGalaxy — Automate Everything. Launch in Minutes.",
  description: "n8n workflow template marketplace with sellers and affiliates.",
};

import { CartProvider } from "@/context/cart-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main className="mx-auto w-full max-w-5xl px-4 py-6">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
