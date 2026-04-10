import "./globals.css";

export const metadata = {
  title: "Nagaraja Markapuram | Frontend Architect",
  description: "Frontend Architect building scalable UI systems with Angular & React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-gray-200 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 backdrop-blur bg-[#020617]/80 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="font-semibold tracking-wide">Nagaraja Markapuram</div>
              <nav className="flex gap-6 text-sm">
                <a href="/" className="hover:text-blue-400">Home</a>
                <a href="/blog" className="hover:text-blue-400">Blog</a>
              </nav>
            </div>
          </header>

          <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
            {children}
          </main>

          <footer className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Nagaraja Markapuram
          </footer>
        </div>
      </body>
    </html>
  );
}