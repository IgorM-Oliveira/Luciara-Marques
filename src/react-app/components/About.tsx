import { Award, BookOpen, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl text-stone-100">
              <span className="font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Quem é{' '}
              </span>
              <span style={{ fontFamily: 'Great Vibes, cursive', fontWeight: 400 }}>
                Luciára Marques
              </span>
            </h2>
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                Advogada especialista em Direito Imobiliário e Inventário, com mais de 7 anos de experiência prática. 
                Atuou por 5 anos no setor jurídico de duas das maiores imobiliárias de Dourados/MS, desenvolvendo 
                profundo domínio na elaboração de contratos e análise de riscos em aquisições imobiliárias.
              </p>
              <p>
                A vivência intensa com operações imobiliárias a conduziu naturalmente aos inventários, partilhas 
                e planejamento patrimonial.
              </p>
              <p>
                Em 2023, transformou essa bagagem em um escritório próprio, com uma proposta de atendimento 
                diferenciada: foco em excelência, agilidade e total segurança na proteção do patrimônio do cliente.
              </p>
              <p>
                Hoje, oferece um serviço jurídico estratégico, claro e altamente personalizado, garantindo segurança 
                em contratos e regularizações imobiliárias, eficiência na condução de inventários e soluções completas 
                para o planejamento patrimonial familiar. Atende presencialmente em Dourados/MS e online em todo o Brasil.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-amber-800" />
                </div>
                <p className="text-sm font-semibold text-stone-100">Excelência</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-emerald-800" />
                </div>
                <p className="text-sm font-semibold text-stone-100">Experiência</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-amber-800" />
                </div>
                <p className="text-sm font-semibold text-stone-100">Dedicação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
