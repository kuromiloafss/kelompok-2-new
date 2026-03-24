import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Category from "@/app/components/Category";
import Card from "@/app/components/Card";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Navbar />
      <Hero />
      <Category />

      <div className="px-8 mt-8">
        <h2 className="font-semibold mb-4">
          Barang Temuan <span className="text-yellow-500">Found</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <Card
            title="Iphone 17 Pro Max"
            location="Vokasi Veteran - Gedung BNI"
            category="Elektronik"
          />
          <Card
            title="Dompet Hitam"
            location="Parkiran UB"
            category="Aksesoris"
          />
          <Card
            title="Botol Minum"
            location="Kantin Vokasi"
            category="Botol"
          />
          <Card
            title="Buku Catatan"
            location="Ruang Kelas A"
            category="Buku"
          />
        </div>
      </div>

    </div>
  );
}