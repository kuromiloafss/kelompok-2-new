const categories = [
  "Elektronik",
  "Buku",
  "Botol",
  "Boneka",
  "Dompet",
  "Uang",
];

export default function Category() {
  return (
    <div className="mx-8 mt-6">
      <h3 className="font-semibold mb-3">Kategori</h3>

      <div className="flex gap-3 flex-wrap">
        {categories.map((item) => (
          <button
            key={item}
            className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}