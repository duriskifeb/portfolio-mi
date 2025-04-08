import { useState, useEffect } from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  BoltIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/16/solid";
import style from "../Header/HeaderStyles.modul.css";

//buat fungsi dulu deh
function Header() {
  const [activeSection, setActiveSection] = useState("/");
  const [isScrool, setScrool] = useState(false);

  const navItem = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#journey", icon: BriefcaseIcon, label: "Journey" },
    { href: "#portfolio", icon: ComputerDesktopIcon, label: "Portfolio" },
    { href: "#learn", icon: BoltIcon, label: "Learn" },
    {
      href: "#contact",
      icon: ChatBubbleOvalLeftEllipsisIcon,
      label: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrool(true);
      } else {
        setActiveSection(false);
      }

      const sections = navItem.map((item) => item.href.replace("#", ""));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];

        if (section === "") continue;

        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection("#" + section);
          break;
        }
      }

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  },[]); //ini kenapa harus ada kurung array?? noted!

  return (
    <div className="header-container">
        <nav className={`navbar ${isScrool ? "scrolled" : ""}`}>
            {navItem.map((item)=> (
                <Link key={item.href} href={item.href}>
                    <div className="nav-item">
                        <item.icon 
                            className={`nav-icon ${
                                activeSection === item.href ? "active" : "inactive"
                            }`}/>
                        <p className={`nav-label ${
                            activeSection === item.href ? "active" : "inactive"
                            
                        }`}>
                            {item.label}
                        </p>    
                    </div>
                </Link>
            ))}
        </nav>
    </div>
  );
}

export { Header };