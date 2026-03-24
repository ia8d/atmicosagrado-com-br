import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { label: "Pilares", href: "/#pilares" },
  { label: "O Método", href: "/metodo" },
  { label: "Blog", href: "/blog" },
  { label: "Evolução", href: "/#evolucao" },
  { label: "Agendar", href: "/#servicos" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-strong shadow-lg" : "bg-transparent"}`
      }>
      
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-display text-xl font-semibold text-foreground">
            Átmico Sagrado 
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
          item.href.startsWith("/#") ?
          <a key={item.href} href={item.href} className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                {item.label}
              </a> :

          <Link key={item.href} to={item.href} className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                {item.label}
              </Link>

          )}
          <a href="https://wa.me/555391461889?text=Oi%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" className="btn-mystic text-sm px-6 py-2.5">
            Agendar Sessão
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground">
          
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen &&
      <div className="md:hidden glass-strong mx-4 mb-4 rounded-2xl p-6 space-y-4">
          {navItems.map((item) =>
        item.href.startsWith("/#") ?
        <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors py-2">
                {item.label}
              </a> :

        <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors py-2">
                {item.label}
              </Link>

        )}
          <a href="https://wa.me/555391461889?text=Oi%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" className="btn-mystic block text-center text-sm px-6 py-2.5 mt-4">
            Agendar Sessão
          </a>
        </div>
      }
    </nav>);

};

export default Navbar;