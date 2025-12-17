import { Building2, FileCheck, Home, Scale, Users, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Compra e Venda de Imóveis',
      description: 'Análise completa para garantir uma aquisição segura, evitando riscos, fraudes e surpresas durante a negociação.'
    },
    {
      icon: FileCheck,
      title: 'Contratos Imobiliários',
      description: 'Elaboração e revisão de contratos com segurança jurídica, protegendo seus direitos em negociações de compra, venda, locação ou cessão.'
    },
    {
      icon: Home,
      title: 'Regularização de Imóveis',
      description: 'Atuação ágil e estratégica para regularizar seu imóvel, incluindo usucapião, retificação de área, escrituras, registro e averbações.'
    },
    {
      icon: Scale,
      title: 'Inventário',
      description: 'Condução de inventários judiciais e extrajudiciais com clareza, eficiência e total segurança jurídica para a família.'
    },
    {
      icon: Users,
      title: 'Partilha em Vida e Doação',
      description: 'Estratégias para organizar a transmissão de bens em vida, reduzindo custos, evitando litígios e protegendo seu patrimônio familiar.'
    },
    {
      icon: Shield,
      title: 'Planejamento Patrimonial',
      description: 'Organização preventiva do patrimônio, evitando conflitos familiares e garantindo uma sucessão segura e estruturada.'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Serviços
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Soluções jurídicas conduzidas com excelência e segurança para suas necessidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-amber-100"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-amber-700 to-amber-900' 
                  : 'bg-gradient-to-br from-emerald-700 to-emerald-900'
              }`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
