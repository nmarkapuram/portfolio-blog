import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-gray-200 antialiased">

        <Header />

        {/* Add top padding because header is fixed */}
        <main className="pt-20 md:pt-24 max-w-6xl mx-auto px-6 py-12 w-full">
          {children}
        </main>

        <footer className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Nagaraja Markapuram
        </footer>
      </body>
    </html>
  );
}