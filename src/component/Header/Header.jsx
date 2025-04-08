import { useState, useEffect } from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  BoltIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/16/solid";
import styles from "../Header/HeaderStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";

function Header() {
  const [activeSection, setActiveSection] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Benar urutannya
  const sunIcon = sun;
  const moonIcon = moon;
  const themeIcon = theme === "light" ? moonIcon : sunIcon;

  const navItems = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#journey", icon: BriefcaseIcon, label: "Journey" },
    { href: "#portfolio", icon: ComputerDesktopIcon, label: "Portfolio" },
    { href: "#learn", icon: BoltIcon, label: "Learn" },
    {
      href: "#contact",
      icon: ChatBubbleOvalLeftEllipsisIcon,
      label: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 0);

      const sections = navItems.map((item) => item.href.replace("#", ""));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;

        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection("#" + section);
          break;
        }
      }

      if (scrollPosition < 100) {
        setActiveSection("/");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <nav
        className={`${styles.navbar} ${
          isScrolled ? styles.navbarScrolled : ""
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`${styles.navLink} ${
              activeSection === item.href ? styles.activeLink : ""
            }`}
          >
            <div className={styles.navItem}>
              <item.icon className={styles.navIcon} />
              <span className={styles.navLabel}>{item.label}</span>
            </div>
          </a>
        ))}
        <div className={styles.toggleContainer}>
          <img
            src={themeIcon}
            alt="Toggle Theme"
            onClick={toggleTheme}
            className={`${styles.themeIcon} ${
              theme === "dark" ? styles.darkIcon : ""
            }`}
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
