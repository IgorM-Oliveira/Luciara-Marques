import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-amber-50" />
            </div>
            <span className="text-xl font-semibold text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>
              Luciára Marques
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-stone-600 hover:text-emerald-800 transition-colors font-medium"
            >
              Sobre mim
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-stone-600 hover:text-emerald-800 transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="text-stone-600 hover:text-emerald-800 transition-colors font-medium"
            >
              Áreas de atuação
            </button>
            <button
              onClick={() => scrollToSection('locais')}
              className="text-stone-600 hover:text-amber-800 transition-colors font-medium"
            >
              Locais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="px-6 py-2 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-amber-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3 bg-white/95 backdrop-blur-sm border-t border-stone-200">
          <button
            onClick={() => scrollToSection('sobre')}
            className="block w-full text-left px-4 py-3 text-stone-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
          >
            Sobre mim
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="block w-full text-left px-4 py-3 text-stone-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('areas')}
            className="block w-full text-left px-4 py-3 text-stone-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
          >
            Áreas de atuação
          </button>
          <button
            onClick={() => scrollToSection('locais')}
            className="block w-full text-left px-4 py-3 text-stone-600 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors font-medium"
          >
            Locais
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="block w-full text-left px-4 py-3 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg hover:shadow-lg transition-all font-medium"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
}
