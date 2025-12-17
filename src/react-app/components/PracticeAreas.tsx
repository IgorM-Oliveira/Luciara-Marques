export default function PracticeAreas() {
  const areas = [
    {
      title: 'Direito Imobiliário',
      description: 'Segurança jurídica em negociações, contratos, regularização e proteção do patrimônio imobiliário.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
    },
    {
      title: 'Direito Sucessório',
      description: 'Inventários, partilhas e planejamento patrimonial voltado à organização familiar.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
    }
  ];

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Áreas de Atuação
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A atuação do escritório é focada nas áreas de:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-80"
            >
              <div className="absolute inset-0">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {area.title}
                </h3>
                <p className="text-stone-200 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
