
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tutoring-text text-white py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Reforço Escolar Boost</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(67) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>contato@reforcoescolarboost.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Atendemos em toda Campo Grande-MS</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Nos siga nas redes</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-tutoring-yellow transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-tutoring-yellow transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-tutoring-yellow transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Selos e Certificações</h4>
              <div className="flex space-x-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-tutoring-text">
                  <span className="font-bold">12+</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-tutoring-text">
                  <span className="font-bold">97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>&copy; 2025 Reforço Escolar Boost. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors mr-6">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
