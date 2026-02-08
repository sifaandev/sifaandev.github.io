import React from 'react';

export default function Skills({ isDark }: { isDark: boolean }) {
   const techSkills = [
    { name: 'HTML', icon: "/html.png", category: "frontend" },
    { name: 'CSS', icon: "/css.png", category: "frontend" },
    { name: 'JavaScript', icon: "/javascript.png", category: "frontend" },
    { name: 'React', icon: "/react.png", category: "frontend" },
    { name: 'TypeScript', icon: "/typescript.png", category: "frontend" },
    { name: 'Next.js', icon: "/next.png", category: "fullstack" },
    { name: 'Bootstrap', icon: "/bootstrap.png", category: "frontend" },
    { name: 'Tailwind', icon: "/tailwindcss.png", category: "frontend" },
    { name: 'React Native', icon: "/react.png", category: "mobile" },
    { name: 'Node.js', icon: "/node.png", category: "backend" },
    { name: 'Express', icon: "/express.png", category: "backend" },
    { name: 'MongoDB', icon: "/mongodb.png", category: "database" },
    { name: 'Authentication', icon: "/authentication.png", category: "bakend" },
    { name: 'REST APIs', icon: "/rest-api.png", category: "backend" },
  ];

  const toolSkills = [
    { name: 'Git', icon: "/git.png" },
    { name: 'Sublime', icon: "/sublime.png" },
    { name: 'VS Code', icon: "/vs-code.png" },
    { name: 'Figma', icon: "/figma.png" },
    { name: 'Postman', icon: "/postman.png" }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'database', label: 'Database' },
  ];

  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredSkills = activeCategory === "all" ? techSkills : techSkills.filter(skil => skil.category === activeCategory)

  function RenderSkills({isDark, title}: {isDark: boolean, title?: "Technologies" | "Development Tools"}) {
    if (title === "Technologies") {
      return (
        <div className="flex flex-wrap gap-[10px_30px] md:gap-[15px_40px]">
          {filteredSkills.map((item, index) => 
            <div key={index} className="flex justify-center items-center">
              <span className="text-xl text-gray-400 -mr-1">•</span>
              <div className="w-12 flex justify-center items-center overflow-hidden">
                <img src={item.icon} alt={item.name} className="p-3" />
              </div>
              <span className={`text-sm text-center leading-relaxed md:leading-loose tracking-wide md:tracking-normal ${isDark ? "text-white" : "text-black"} break-words -ml-1`}>{item.name}</span>
            </div>
          )}
        </div>
    )} 

    return (
      <div className="flex flex-wrap gap-[10px_30px] md:gap-[15px_40px]">
        {toolSkills.map((item, index) => 
          <div key={index} className={`flex justify-center items-center`}>
            <span className="text-xl text-gray-400 -mr-1">•</span>
            <div className="w-12 flex justify-center items-center overflow-hidden">
              <img src={item.icon} alt={item.name} className="p-3" />
            </div>
            <span className={`text-sm text-center leading-relaxed md:leading-loose tracking-wide md:tracking-normal ${isDark ? "text-white" : "text-black"} break-words -ml-1`}>{item.name}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-12">

      <div className="">
        <div className="flex flex-wrap gap-3 py-3 md:py-5 mb-5 md:mb-1">
          {categories. map((item) =>
            <button
              key={item.label} 
              onClick={() => setActiveCategory(item.id)}
              className={`px-4 py-2 rounded-full border hover:bg-purple-500/10 hover:border-purple-500 hover:text-purple-600 transition-all duration-100 ease-out ${isDark ? "border-gray-600" : "border-gray-300"} ${activeCategory === item.id && "font-semibold bg-purple-600 text-white hover:text-white hover:bg-purple-700"}`}>
                {item.label}
            </button>
          )}
        </div>

        <div className="space-y-4">
          <p className={`nunito text-lg md:text-xl font-medium ${isDark ? "text-white" : "text-black"}`}>Technologies</p>
          <RenderSkills isDark={isDark} title="Technologies" />
        </div>
      </div>

      <div className="space-y-4">
        <p className={`nunito text-lg md:text-xl font-medium ${isDark ? "text-white" : "text-black"}`}>Development Tools</p>
        <RenderSkills isDark={isDark} title="Development Tools" />
      </div>

    </div>
  );
}
