import { MapPin, Instagram } from 'lucide-react';

export default function Locations() {
  const location = {
    address: 'R. Rio Brilhante, 768',
    neighborhood: 'Jardim Água Boa',
    city: 'Dourados',
    state: 'MS',
    cep: '79811-120'
  };

  return (
    <section id="locais" className="py-24 bg-gradient-to-br from-emerald-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Locais de Atendimento
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Atendimento presencial em Dourados/MS e online em todo o Brasil
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.address}, ${location.neighborhood}, ${location.city} - ${location.state}, ${location.cep}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              {location.city} - {location.state}
            </h3>
            <div className="text-center space-y-1 text-stone-600">
              <p>{location.address}</p>
              <p>{location.neighborhood}</p>
              <p>{location.city} - {location.state}, {location.cep}</p>
            </div>
            <p className="text-center text-sm text-emerald-800 font-medium mt-4">
              Clique para abrir no Google Maps
            </p>
          </a>

          <a
            href="https://www.instagram.com/luciaramarques/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ficou com dúvidas?
            </h3>
            <div className="text-center space-y-1 text-stone-600">
              <p>Me siga no Instagram</p>
              <p className="font-semibold text-emerald-800">@luciaramarques</p>
            </div>
            <p className="text-center text-sm text-emerald-800 font-medium mt-4">
              Clique para visitar o perfil
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
