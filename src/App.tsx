import { useEffect, useState, useRef } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Project from "@/components/Project"
import useLocalStorage from '@/hooks/useLocalStorage'

function App() {
  const [isDark, setIsDark] = useLocalStorage("theme", false)
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside)

    const closeMenu = () => setOpenMenu(false)
    document.addEventListener("scroll", closeMenu, { passive: true })

    return () => 
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("scroll", closeMenu)
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-20 max-w-screen-2xl mx-auto`}>
        <nav className={`${isDark ? "bg-[#11072099] backdrop-blur-md" : "bg-[#ffffff99] backdrop-blur-md"} backdrop-blur-md overflow-x-hidden`}>
          <Navbar isDark={isDark} setIsDark={setIsDark} openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>
        <div className={`h-px flex-1 ${isDark ? "bg-[#1a0f2d]" : "bg-gray-200"}`} />
      </header>

      <main className="w-full space-y-20">
        <section id="home" className="relative top-0 scroll-mt-48 max-w-screen-2xl mx-auto">
          <div className="px-5 sm:px-7 md:px-14 lg:px-18 mb-20 overflow-x-hidden mt-20">
            <Hero isDark={isDark} />
          </div>
          <div className={`h-px flex-1 ${isDark ? "bg-[#1a0f2d]" : "bg-gray-200"}`} />
        </section>

        <section id="about" className="scroll-mt-50 max-w-screen-2xl mx-auto">
          <div className="px-5 sm:px-7 md:px-14 lg:px-18 mb-20 overflow-x-hidden">
            <About isDark={isDark} />
          </div>
          <div className={`h-px flex-1 ${isDark ? "bg-[#1a0f2d]" : "bg-gray-200"}`} />
        </section>

        <section id="skills" className="scroll-mt-36 max-w-screen-2xl mx-auto">
          <div className="px-5 sm:px-7 md:px-14 lg:px-18 mb-20 overflow-x-hidden">
            <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>Technical Skills & Tools</h1>
            <Skills isDark={isDark} />
          </div>
          <div className={`h-px flex-1 ${isDark ? "bg-[#1a0f2d]" : "bg-gray-200"}`} />
        </section>

        <section id="projects" className="scroll-mt-30 max-w-screen-2xl mx-auto">
          <div className="px-5 sm:px-7 md:px-14 lg:px-18 mb-20 overflow-x-hidden">
            <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>Projects</h1>
            <Project isDark={isDark} />
          </div>
          <div className={`h-px flex-1 ${isDark ? "bg-[#1a0f2d]" : "bg-gray-200"}`} />
        </section>

        <section id="contact" className="scroll-mt-32 max-w-screen-2xl mx-auto">
          <div className="px-5 sm:px-7 md:px-14 lg:px-18 -mb-10 md:mb-0 overflow-x-hidden">
            <h1 className={`text-3xl md:text-4xl font-bold mt-3 md:mt-0 ${isDark ? "text-white" : "text-black"}`}>Let's Collaborate</h1>
            <Contact isDark={isDark} />
          </div>
        </section>

        <div ref={menuRef} className={`fixed top-[4.75rem] right-8 flex justify-center items-center rounded-xl shadow-xl backdrop-blur-md transition-all duration-100 ${isDark ? "text-white bg-violet-950/80" : "text-black bg-white"} ${openMenu ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-2 pointer-events-none"} `}>
          <ul className="flex flex-col md:flex-row">
            {[
              { name: "Home", href: "#home", id: "home" },
              { name: "About", href: "#about", id: "about" },
              { name: "Skills", href: "#skills", id: "skills" },
              { name: "Projects", href: "#projects", id: "projects" },
              { name: "Contact", href: "#contact", id: "contact" }
            ].map((link) =>
              <li key={link.id} className="w-40">
                <a
                  href={link.href}
                  className="flex justify-start pl-9 items-center py-3">
                  {link.name}
                </a>
              </li>
            )}
          </ul>
        </div>
      </main>

      <footer>
        <div className="scroll-mt-48 max-w-screen-2xl mx-auto overflow-x-hidden">
          <div className={`h-px flex-1 ${isDark ? "bg-[#1a0f2d]" : "bg-gray-200"}`} />
          <Footer isDark={isDark} />
        </div>
      </footer>
    </>
  )
}

export default App;