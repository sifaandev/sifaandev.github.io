type HeroProps = {
  isDark: boolean;
};

export default function Hero({isDark}: HeroProps) {
  return (
    <div className="flex flex-col-reverse items-center md:justify-between md:flex-row">
      <div className="flex flex-col flex-1">
        <p className={`text-sm md:text-base font-semibold tracking-wider ${isDark ? "text-white" : "text-black"} mb-3`}>HELLO, I AM</p>
        <div className="flex justify-center items-center">
          <h1 className={`text-4xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Sifaan Zayn</span>
          </h1>
          <div className="h-px flex-1 bg-gradient-to-r from-pink-500 to-transparent"/>
        </div>

        <span className="my-4 md:my-6 max-w-2xl md:text-lg">
          I'm a full stack and react native developer who turns ideas into clean, fast and reliable digital products that deliver real value
        </span>

        <div className={`mb-6 md:mb-7 flex flex-wrap gap-4 w-fit px-5 py-3 rounded-xl items-center shadow-sm md:shadow-md border-0 md:border ${isDark ? "border-[#2a1b3d] bg-[#1a0f2d]" : "border-[#e5e7eb] bg-white"}`}>
          <div className="text-center">
            <p className={`text-left text-3xl font-bold ${isDark ? "text-purple-500" : "text-purple-600"}`}>1+</p>
            <p className={`text-sm md:text-base leading-relaxed md:leading-loose tracking-wide md:tracking-normal font-medium`}>Year Experience</p>
          </div>
          <div className={`text-center border-l pl-6 ${isDark ? "border-violet-400/10" : "border-gray-300"}`}>
            <p className={`text-left text-3xl font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}>10+</p>
            <p className={`text-sm md:text-base leading-relaxed md:leading-loose tracking-wide md:tracking-normal font-medium `}>Projects Build</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button onClick={()=> window.location.href = "#projects"} className="hover:opacity-90 cursor-pointer sm:w-fit font-semibold rounded-xl px-6 py-3 transition-all bg-gradient-to-r from-purple-600 to-pink-500 text-white active:scale-95">
            View Projects
          </button>

          <button onClick={()=> window.location.href = "#contact"} className={`sm:w-fit font-semibold rounded-xl px-6 py-3 border-2 transition-all active:scale-95 cursor-pointer ${isDark ? "border-purple-500 text-purple-500 hover:bg-purple-500/5" : "border-purple-600 text-purple-600 hover:bg-purple-600/15"}`}>
            Contact Me
          </button>
        </div>
      </div>

      <div className={`mb-8 md:my-6 rounded-3xl shadow-sm md:shadow-md overflow-hidden border-0 md:border ${isDark ? "border-[#2a1b3d] bg-[#1a0f2d]" : "border-[#e5e7eb] md:border-pink-500/35 bg-white"}`}>
        <div className="w-72 h-72 md:w-80 md:h-80 -mr-1">
          <img 
            src="/me.png" 
            alt="Sifaan - Full Stack Developer" 
            className="mt-3 md:mt-7 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}