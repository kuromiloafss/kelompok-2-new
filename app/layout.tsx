import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profil Mahasiswa - Kodecolor Style",
  description: "Tugas Halaman Profil dengan Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-slate-800`}>
        {/* Navbar Simpel ala Kodecolor */}
        <nav className="sticky top-0 z-50 border-b bg-white px-4 py-3 shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 shadow-inner"></div>
                <span className="text-xl font-bold tracking-tight text-slate-700">Kelompok 2</span>
              </div>
              <div className="hidden md:block">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="rounded-md bg-gray-100 px-4 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <button className="hover:text-blue-500">Find people</button>
              <button className="flex items-center gap-1 hover:text-blue-500">
                Messages <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] text-blue-600">4</span>
              </button>
              <button className="hover:text-blue-500">My Contacts</button>
              <div className="h-8 w-8 overflow-hidden rounded-full border">
                <img src="https://via.placeholder.com/150" alt="Avatar" />
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}