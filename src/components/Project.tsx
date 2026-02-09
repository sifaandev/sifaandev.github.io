export default function Project({isDark}: {isDark: boolean}) {
  const projects = [
    {
      title: "Todoflex",
      description: "A minimal todo app with search, filters, dark/light mode, and persistent task storage",
      tech: ["React", "Tailwind", "TypeScript"],
      image: "/todoflex.jpg",
      live: "https://sifaandev.github.io/todoflex",
      github: "https://github.com/sifaandev/todoflex"
    },
  ];

  return (
    <div className="flex flex-col gap-5 md:mb-14">
      <p className={`md:text-lg`}>
        Here is a collection of projects I've created to showcase my skills and expertise
      </p>
      <div className="flex flex-wrap sm:grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {projects.map((item, index) => 
          <div key={index} className={`flex w-full p-4 flex-col gap-4 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0px_10px_50px_-15px_rgba(147,51,234,0.25)] border hover:border-purple-400 ${isDark ? "border-[#2a1b3d] bg-[#1a0f2d] hover:border-purple-500 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)]" : "border-[#e5e7eb] bg-white hover:border-pink-500"}`}>
            <div className={`h-52 relative overflow-hidden rounded-2xl border ${isDark ? "border-[#2a1b3d]" : "border-[#e5e7eb]"}`}>
              <div className="h-full flex items-center justify-center">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
            <strong className={`font-bold text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</strong>
            <p className="text-sm md:text-base">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, techIndex) =>
                <span key={techIndex} className={`cursor-default px-3 py-1 rounded-full text-sm transition-all duration-100 border ${isDark ? "border-[#e0f2fe]" : "border-[#2d2639]"}`}>{tech}</span>
              )}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <a href={item.live} className={`hover:opacity-90 flex-1 py-3 text-center rounded-xl font-semibold transition-all active:scale-95 ${isDark ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'}`}>Live Demo</a>
              <a href={item.github} className={`flex-1 py-3 text-center rounded-xl font-semibold transition-all active:scale-95 border-2 ${isDark ? 'text-purple-500 border-purple-500 hover:bg-purple-500/5' : 'text-purple-600 border-purple-600 hover:bg-purple-600/15'}`}>View Code</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


