import React from 'react';

type ThemeToggleProps = {
  isDark: boolean,
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeToggle = ({isDark, setIsDark}: ThemeToggleProps) => {
 return (
  <div onClick={() => setIsDark(prev => !prev)} className={`relative flex items-center w-[65px] h-[32px] rounded-full cursor-pointer transition-colors duration-300 ${isDark ? "bg-white" : "bg-black"}`}>
    <span className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isDark ? "bg-black translate-x-0" : "bg-white translate-x-8"}`}>
      {isDark ?
        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="white"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
      :
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="12" r="4"/> <line x1="12" y1="1" x2="12" y2="3"/> <line x1="12" y1="21" x2="12" y2="23"/> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/> <line x1="1" y1="12" x2="3" y2="12"/> <line x1="21" y1="12" x2="23" y2="12"/> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      }
    </span>
  </div>
 )
}

type NavbarProps = {
  isDark: boolean,
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>,
  openMenu: boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({isDark, setIsDark, openMenu, setOpenMenu}: NavbarProps) {
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-5 mx-auto p-3 md:p-5">
      <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className={`tracking-wide md:tracking-wider text-[34px] md:text-4xl font-bold relative ${isDark ? "text-white after:bg-white" : "text-black after:bg-black"} after:content-[''] after:absolute after:bottom-1 after:md:-bottom-1 after:left-3 after:w-20 after:h-[3px]`}>Sifaan</span>
      </a>

      <div className="flex justify-between items-center gap-6 md:hidden">
        <ThemeToggle isDark={isDark} setIsDark={setIsDark}/>

        <div onClick={() => setOpenMenu(prev => !prev)} className={`flex justify-center items-center w-7 h-7 transition-all duration-300 ${openMenu ?  "rotate-90" : "rotate-0"}`}>
          {openMenu ? <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill={`${isDark ? "white" : "black"}`}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> :
            <svg width="26" height="27" viewBox="0 0 32 28" fill="none">
              <line x1="3" y1="5" x2="29" y2="5" stroke={`${isDark ? "white" : "black"}`} strokeWidth="3.5" strokeLinecap="round"/>
              <line x1="3" y1="14" x2="19" y2="14" stroke={`${isDark ? "white" : "black"}`} strokeWidth="3.5" strokeLinecap="round"/>
              <line x1="3" y1="23" x2="29" y2="23" stroke={`${isDark ? "white" : "black"}`} strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
          }
        </div>
      </div>

      <div className="hidden w-full md:flex md:justify-center md:items-center md:gap-12 lg:gap-16 md:w-auto">
        <ul className="flex flex-col md:flex-row md:gap-3 lg:gap-5">
          {[
            {name: "Home", href: "#home", id: "home"},
            {name: "About", href: "#about", id: "about"},
            {name: "Skills", href: "#skills", id: "skills"},
            {name: "Projects", href: "#projects", id: "projects"},
            {name: "Contact", href: "#contact", id: "contact"}
          ].map((link) =>
            <li key={link.id}>
              <a 
                href={link.href}
                className={`flex justify-center items-center px-4 py-2.5 rounded-lg transition-all duration-300 ${activeSection === link.id ? "bg-purple-500 text-white" : "hover:opacity-75"}`}>
                  {link.name}
              </a>
            </li>
          )}
        </ul>

        <ThemeToggle isDark={isDark} setIsDark={setIsDark}/>
      </div>
    </div>
  );
}
