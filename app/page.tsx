import { Mail, MapPin, Globe, Phone, Bookmark, MessageSquare, UserPlus, Star } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-6xl p-4 md:p-8">
      <div className="flex flex-col gap-8 md:flex-row">    
        <aside className="w-full md:w-1/3">
          <div className="mb-6 overflow-hidden rounded-lg bg-white shadow-sm border border-gray-100">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DUGQ9yJk5bO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" data-instgrm-version="14"></blockquote>
            <script async src="//www.instagram.com/embed.js"></script>
          </div>

          {/* HAPUS </div> YANG INI */}

          <div className="space-y-8 px-2">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Work / Academic</h3>
              <div className="space-y-4">
                <div className="relative border-l-2 border-blue-500 pl-4">
                  <span className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-blue-500"></span>
                  <p className="font-bold text-slate-700">Ekraf - Kreatrip</p>
                  <p className="text-sm text-gray-500 italic">Primary Role</p>
                  <p className="mt-1 text-xs text-gray-400">Universitas Teknologi • 2025 - Present</p>
                </div>
                <div className="pl-4">
                  <p className="font-bold text-slate-700">Student</p>
                  <p className="text-sm text-gray-400">2025</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['UI/UX Design', 'Branding', 'TypeScript', 'Tailwind CSS', 'SQL Database'].map((skill) => (
                  <span key={skill} className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Kolom Kanan - Detail Utama */}
        <section className="flex-1">
          {/* Header Profil */}
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-slate-800">Tania Hertawan</h1>
                <div className="flex items-center text-sm text-gray-400">
                   <MapPin className="mr-1 h-4 w-4" /> Jakarta, Indonesia
                </div>
              </div>
              <p className="mt-1 text-lg font-medium text-blue-500">Student</p>
              
              <div className="mt-6 flex items-center gap-4">
                <div className="text-2xl font-bold">8,6</div>
                <div className="flex text-blue-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-gray-50">
                <Bookmark className="h-4 w-4" /> Bookmark
              </button>
              <button className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-600">
                <UserPlus className="h-4 w-4" /> Add Contact
              </button>
            </div>
          </div>

          {/* Tab Navigation ala Kodecolor */}
          <div className="mb-8 border-b border-gray-200">
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
              <button className="border-b-2 border-slate-800 pb-3 text-slate-800">About</button>
              <button className="pb-3 transition hover:text-slate-600">Timeline</button>
              <button className="pb-3 transition hover:text-slate-600">Portfolio</button>
            </div>
          </div>

          {/* Informasi Detail */}
          <div className="space-y-10">
            <section>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">Contact Information</h3>
              <div className="grid grid-cols-1 gap-y-4 text-sm md:grid-cols-[150px_1fr]">
                <span className="font-bold text-slate-700">Phone:</span>
                <span className="text-blue-500">+62 813 8681 4423</span>
                
                <span className="font-bold text-slate-700">Domisili:</span>
                <span className="text-slate-600">Matraman, Jakarta, 65145</span>
                
                <span className="font-bold text-slate-700">E-mail:</span>
                <span className="text-blue-500">taniahertawan22@gmail.com</span>
                
                <span className="font-bold text-slate-700">Site:</span>
                <a href="#" className="text-blue-500 hover:underline">www.portofolioku.com</a>
              </div>
            </section>

            <section>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">Basic Information</h3>
              <div className="grid grid-cols-1 gap-y-4 text-sm md:grid-cols-[150px_1fr]">
                <span className="font-bold text-slate-700">Kelas:</span>
                <span className="text-slate-600">T2E</span>
                
                <span className="font-bold text-slate-700">Jurusan:</span>
                <span className="text-slate-600">Teknologi Informasi</span>
                
                <span className="font-bold text-slate-700">Gender:</span>
                <span className="text-slate-600">Female</span>
              </div>
            </section>

            {/* Tentang Diri - Min 100 Kata */}
            <section>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Tentang Diri</h3>
              <p className="leading-relaxed text-slate-600">
                Saya adalah mahasiswa Program Studi Teknologi Informasi yang memiliki semangat tinggi dalam menggabungkan dunia teknologi dengan kreativitas. Sejak awal menempuh pendidikan di bidang ini, saya menyadari bahwa teknologi bukan sekadar tentang kode dan sistem, melainkan tentang bagaimana menciptakan solusi yang berdampak nyata bagi masyarakat. Ketertarikan saya terhadap inovasi digital membawa saya bergabung menjadi anggota aktif dalam Himpunan Mahasiswa di Departemen Ekonomi Kreatif. Di sini, saya belajar bahwa teknologi dan ekonomi kreatif adalah dua sisi mata uang yang saling melengkapi.

                
                Sebagai mahasiswa Teknologi Informasi, saya mendalami berbagai aspek pengembangan perangkat lunak, mulai dari pemrograman web, desain antarmuka pengguna (UI/UX), hingga pengelolaan basis data. Namun, pengalaman berharga justru saya dapatkan ketika terlibat langsung dalam organisasi kemahasiswaan. Di Departemen Ekonomi Kreatif, saya berperan dalam menginisiasi proyek-proyek digital yang mendukung pengembangan ekosistem kreatif di kampus. Saya percaya bahwa mahasiswa tidak hanya dituntut untuk menguasai teori, tetapi juga mampu menerapkan ilmunya dalam kegiatan yang konkret dan kolaboratif.
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}