export default function Project({isDark}: {isDark: boolean}) {
  const projects = [
    {
      title: "Todo-App",
      description: "Todo App with filters, dark mode & persistent storage",
      tech: ["React", "Tailwind", "TypeScript"],
      image: "/project-1.png",
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
          <div key={index} className={`flex w-full p-5 flex-col gap-4 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0px_10px_50px_-15px_rgba(147,51,234,0.25)] border hover:border-purple-400 ${isDark ? "border-[#2a1b3d] bg-[#1a0f2d] hover:border-purple-500 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)]" : "border-[#e5e7eb] bg-white hover:border-pink-500"}`}>
            <div className="h-52 relative overflow-hidden rounded-lg">
              <div className="h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">{(index + 1).toString().padStart(2, '0')}</span>
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
              <a href={item.live} onClick={(e) => e.preventDefault()} className={`hover:opacity-90 flex-1 py-3 text-center rounded-xl font-semibold transition-all active:scale-95 ${isDark ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'}`}>Live Demo</a>
              <a href={item.github} onClick={(e) => e.preventDefault()} className={`flex-1 py-3 text-center rounded-xl font-semibold transition-all active:scale-95 border-2 ${isDark ? 'text-purple-500 border-purple-500 hover:bg-purple-500/5' : 'text-purple-600 border-purple-600 hover:bg-purple-600/15'}`}>View Code</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

