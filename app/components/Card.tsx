type CardProps = {
  title: string;
  location: string;
  category: string;
};

export default function Card({ title, location, category }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-3 hover:scale-105 transition">
      
      <div className="h-32 bg-gray-200 rounded-lg mb-3"></div>

      <span className="text-xs bg-blue-100 px-2 py-1 rounded">
        {category}
      </span>

      <h4 className="font-semibold mt-2">{title}</h4>

      <p className="text-xs text-gray-500">{location}</p>

      <button className="mt-3 w-full bg-yellow-400 py-2 rounded hover:bg-yellow-500">
        Lihat Detail
      </button>
    </div>
  );
}