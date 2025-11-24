import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const fragmentMono = Fragment_Mono({ 
  weight: '400',
  subsets: ["latin"], 
  variable: '--font-fragment-mono' 
});

export const metadata = {
  title: "Biobricks Portfolio",
  description: "Personal Portfolio Website",
};

import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fragmentMono.variable} font-sans bg-white text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 w-full max-w-5xl mx-auto p-6 md:p-12 lg:p-16">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
