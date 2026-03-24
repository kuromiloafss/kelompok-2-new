export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="font-bold text-lg text-blue-900">
        Fakultas Vokasi UB
      </h1>

      <div className="flex gap-6 items-center">
        <p className="cursor-pointer hover:text-blue-600">Lihat Barang</p>
        <p className="cursor-pointer hover:text-blue-600">Lapor Kehilangan</p>

        <button className="bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 transition">
          Masuk
        </button>
      </div>
    </div>
  );
}