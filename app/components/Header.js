"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    if (pathname === "/") {
      const section = document.getElementById("architecture");

      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection("architecture");
            } else {
              setActiveSection("home");
            }
          },
          {
            rootMargin: "-40% 0px -50% 0px",
          }
        );

        observer.observe(section);

        return () => {
          observer.disconnect();
          window.removeEventListener("scroll", onScroll);
        };
      }
    }

    setActiveSection(null);

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Architecture", href: "/#architecture" },
    { name: "Blog", href: "/blog" },
    { name: "Profile", href: "/about" },
  ];

  const isActive = (item) => {
    if (item.href === "/") {
      return pathname === "/" && activeSection === "home";
    }

    if (item.href === "/#architecture") {
      return pathname === "/" && activeSection === "architecture";
    }

    return pathname.startsWith(item.href);
  };

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur bg-[#020617]/80 border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center">

        {/* LOGO */}
        <Link href="/" className="font-semibold tracking-wide">
          Nagaraja Markapuram
        </Link>

        {/* DESKTOP NAV */}
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                relative px-2 py-1 transition
                ${
                  isActive(item)
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              {item.name}

              {isActive(item) && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400" />
              )}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="ml-auto md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  ${
                    isActive(item)
                      ? "text-blue-400"
                      : "text-gray-300"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}