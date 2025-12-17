import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-0 md:pb-40">
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50"></div>
      
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
              <img
                src="https://mocha-cdn.com/019aeb2d-14ff-7271-8321-3d43bd4fc237/image.png_9642.png"
                alt="Advogada"
                className="w-full h-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex items-end justify-center pb-12 pointer-events-none">
              <div className="text-center space-y-3">
                <h1 
                  className="text-4xl md:text-5xl font-normal text-white leading-tight px-8"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Advocacia Especializada em
                </h1>
                <p 
                  className="text-5xl md:text-6xl text-white px-8"
                  style={{ fontFamily: 'Great Vibes, cursive', fontWeight: 400 }}
                >
                  Imóveis e Inventário
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <p className="text-xl text-stone-700 leading-relaxed">
              Atuação jurídica personalizada para regularizar e proteger seu patrimônio, 
              com soluções claras e conduzidas com eficiência e segurança em todas as etapas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span className="font-semibold">Agende uma Consulta</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative w-full min-h-screen">
        <div className="relative w-full min-h-screen">
          <img
            src="https://mocha-cdn.com/019aeb2d-14ff-7271-8321-3d43bd4fc237/image.png_9642.png"
            alt="Advogada"
            className="w-full h-full min-h-screen object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6">
            <div className="text-center space-y-2 mb-8">
              <p 
                className="text-6xl text-white leading-tight"
                style={{ fontFamily: 'Great Vibes, cursive', fontWeight: 400 }}
              >
                Luciára Marques
              </p>
              <h1 
                className="text-2xl font-normal text-white leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Advocacia Especializada em
              </h1>
              <p 
                className="text-3xl text-white"
                style={{ fontFamily: 'Great Vibes, cursive', fontWeight: 400 }}
              >
                Imóveis e Inventário
              </p>
            </div>
            
            <button
              onClick={scrollToContact}
              className="group w-full px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <span className="font-semibold">Agende uma Consulta</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Wave divider - Desktop */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-32 lg:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-stone-800"
          />
        </svg>
      </div>

      {/* Wave divider - Mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-stone-800"
          />
        </svg>
      </div>
    </section>
  );
}
