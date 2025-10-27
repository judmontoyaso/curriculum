import React, { useState, useEffect, useRef } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserCircle, 
  faFileAlt, 
  faLaptopCode, 
  faEnvelope, 
  faBook, 
  faBlog,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import ActiveRoute from "./ActiveRoute";
import { motion, AnimatePresence } from "framer-motion";
import { useBanner } from "../contexts/BannerContext";

const menuItems = [
  { href: "/", icon: faUserCircle, text: "Perfil", color: "#3B82F6" },
  { href: "/curriculum", icon: faFileAlt, text: "Curriculum", color: "#10B981" },
  { href: "/project", icon: faLaptopCode, text: "Proyectos", color: "#84CC16" },
  { href: "/libros", icon: faBook, text: "Lecturas", color: "#8B5CF6" },
  { href: "/blog", icon: faBlog, text: "Blog", color: "#F59E0B" },
  { href: "/contact", icon: faEnvelope, text: "Contacto", color: "#EC4899" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const menuRef = useRef(null);
  const { isBannerVisible } = useBanner();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Cerrar el menú cuando se cambia de ruta
    setIsOpen(false);
  }, [router.asPath]);

  const navClasses = `
    fixed ${isBannerVisible ? 'top-[28px]' : 'top-0'} left-0 right-0 z-50
    transition-all duration-300
    ${scrolled 
      ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" 
      : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"}
  `;

  const MenuItem = ({ href, icon, text, color }) => {
    const isActive = router.asPath === href;
    
    return (
      <ActiveRoute href={href}>
        <div className="relative group">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800">
            <FontAwesomeIcon 
              icon={icon} 
              className={`text-lg ${isActive ? "text-" + color : "text-gray-600 dark:text-gray-300"}`}
            />
            <span className={`${isActive ? "text-gray-900 dark:text-white font-medium" : "text-gray-600 dark:text-gray-300"}`}>
              {text}
            </span>
          </div>
          {isActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
              style={{ backgroundColor: color }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </div>
      </ActiveRoute>
    );
  };

  return (
    <nav className={navClasses}>
      <div ref={menuRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ThemeSwitch />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <MenuItem key={item.href} {...item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          >
            <FontAwesomeIcon 
              icon={isOpen ? faXmark : faBars} 
              className="text-xl"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute left-0 right-0 top-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.href} className="py-1">
                    <MenuItem {...item} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;