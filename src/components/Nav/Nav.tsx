import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const navItems = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

const Nav = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setIsScroll(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-20 top-0 left-0 right-0 transition duration-500 ${
        isScroll ? "bg-white shadow-xl " : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4 sm:px-6 max-w-7xl mx-auto h-16 ">
        <div className="first-letter:text-2xl font-[cursive] hover:scale-110 transition duration-500">
          <a href="#home">A.3liewa</a>
        </div>
        <ul className="hidden md:flex gap-4 ">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="capitalize hover:text-blue-600 transition duration-400 font-medium"
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-gray-500 cursor-pointer z-50"
        >
          {isOpen ? (
            <FaTimes
              size={25}
              className="hover:rotate-90 hover:scale-110 hover:text-red-400 transition duration-500 "
            />
          ) : (
            <HiMenuAlt3 size={25} />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6 }}
              className="
              fixed inset-0
              flex flex-col justify-center items-center
              gap-8
            bg-white/20
              backdrop-blur-2xl
              shadow-2xl
              md:hidden
              z-40

              "
            >
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="capitalize hover:scale-110 transition duration-500 hover:text-blue-600 text-2xl "
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
