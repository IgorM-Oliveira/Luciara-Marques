import { Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0AE-mail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5567998864493?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold text-stone-800 mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Entre em Contato
              </h2>
              <p className="text-xl text-stone-600">
                Estou à disposição para esclarecer suas dúvidas e discutir 
                como posso ajudá-lo com suas questões jurídicas.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5567998864493" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-amber-800 transition-colors"
                  >
                    +55 67 9988-6493
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-1">E-mail</h3>
                  <a 
                    href="mailto:Luciaramarques.adv@gmail.com"
                    className="text-stone-600 hover:text-amber-800 transition-colors"
                  >
                    Luciaramarques.adv@gmail.com
                  </a>
                </div>
              </div>
              
              
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-stone-800 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-800 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-stone-800 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-800 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all resize-none"
                  placeholder="Como posso ajudá-lo?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg hover:shadow-xl transition-all font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-stone-200">
        <p className="text-center text-stone-600">
          © {new Date().getFullYear()} Luciára Marques - Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
