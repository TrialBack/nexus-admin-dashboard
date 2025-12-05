import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import React from "react";
import MobileSideBar from "@/components/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus Admin Dashboard",
  description: "High performance admin dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen bg-gray-100 overflow-hidden`}>
        {/* Sidebar Alanı */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>
        
        {/* Ana İçerik Alanı */}
        <main className="flex-1 flex flex-col h-full overflow-y-auto">
          {/* Header - DÜZELTME: justify-between ve px-6 */}
          <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
            
            <div className="flex items-center gap-4">
              <MobileSideBar />
              <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Kullanıcı Avatarı */}
              <div className="h-8 w-8 rounded-full bg-blue-500"></div>
            </div>
          </header>

          {/* Sayfa İçeriği */}
          <div className="p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}