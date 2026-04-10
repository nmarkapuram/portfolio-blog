import "./globals.css";

export const metadata = {
  title: "Nagaraja Markapuram | Frontend Architect",
  description:
    "Frontend Architect building scalable UI systems with Angular & React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-gray-200 antialiased">
        <div className="min-h-screen flex flex-col">
          
          {/* HEADER */}
          <header className="sticky top-0 z-50 backdrop-blur bg-[#020617]/80 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              
              {/* Logo */}
              <div className="font-semibold tracking-wide text-white">
                Nagaraja Markapuram
              </div>

              {/* Nav */}
              <nav className="flex items-center gap-6 text-sm">
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
                <a
                  href="/blog"
                  className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition"
                >
                  Blog
                </a>
              </nav>
            </div>
          </header>

          {/* MAIN */}
          <main className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Nagaraja Markapuram
          </footer>
        </div>
      </body>
    </html>
  );
}