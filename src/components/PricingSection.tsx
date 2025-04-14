
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Investimento que Traz Resultados Reais</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Plan 1 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-2 text-center">Aula Emergencial</h3>
              <div className="flex justify-center items-baseline my-4">
                <span className="text-4xl font-extrabold text-tutoring-orange">R$55</span>
                <span className="text-gray-600 ml-1">/hora</span>
              </div>
              <p className="text-center text-gray-600">
                Ideal para preparo de provas ou trabalhos específicos
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="bg-tutoring-yellow p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>Atendimento sob demanda</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-tutoring-yellow p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>Escolha da disciplina</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-tutoring-yellow p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>Atendimento domiciliar</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-100 hover:bg-gray-200 text-tutoring-text">
                Saiba Mais
              </Button>
            </div>
          </div>
          
          {/* Plan 2 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-2 text-center">Plano Semanal</h3>
              <div className="flex justify-center items-baseline my-4">
                <span className="text-4xl font-extrabold text-tutoring-orange">R$200</span>
                <span className="text-gray-600 ml-1">/semana</span>
              </div>
              <p className="text-center text-gray-600">
                2 aulas por semana, ideais para reforço contínuo
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="bg-tutoring-yellow p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>2 sessões de 2h por semana</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-tutoring-yellow p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>Material de apoio incluído</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-tutoring-yellow p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>Horários flexíveis</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-100 hover:bg-gray-200 text-tutoring-text">
                Saiba Mais
              </Button>
            </div>
          </div>
          
          {/* Plan 3 - Best Value */}
          <div className="border-2 border-tutoring-orange rounded-xl overflow-hidden relative shadow-lg transform scale-105 md:scale-110 z-10">
            <div className="absolute top-0 right-0 bg-tutoring-red text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
              MAIS POPULAR
            </div>
            <div className="bg-orange-50 p-6">
              <h3 className="text-xl font-bold mb-2 text-center">Plano Mensal</h3>
              <div className="flex justify-center items-baseline my-4">
                <span className="text-4xl font-extrabold text-tutoring-orange">R$720</span>
                <span className="text-gray-600 ml-1">/mês</span>
              </div>
              <p className="text-center text-gray-600">
                8 aulas por mês + 1 aula extra para provas
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="bg-tutoring-orange p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>8 sessões de 2h por mês</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-tutoring-orange p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>1 aula extra para provas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-tutoring-orange p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>Material didático completo</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-tutoring-orange p-1 rounded-full mr-2 text-white">
                    <Check size={16} className="text-white" />
                  </span>
                  <span>Relatórios de progresso</span>
                </li>
              </ul>
              <Button className="w-full cta-button">
                Garanta uma das 4 Últimas Vagas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
