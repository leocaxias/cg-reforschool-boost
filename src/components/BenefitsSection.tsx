
import React from 'react';
import { Home, Award, TrendingUp } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      {/* Price preview added before benefits */}
      <div className="container px-4 mx-auto text-center mb-8">
        <h3 className="text-lg md:text-xl text-gray-700">
          Pacotes mensais a partir de <span className="text-tutoring-orange font-bold">R$ 55,00</span> Reais a Hora/Aula
        </h3>
      </div>

      <div className="container px-4 mx-auto">
        <h2 className="section-title">Benefícios do Nosso Reforço Escolar</h2>
        
        <div className="md:hidden mt-8">
          <p className="text-center text-lg text-gray-700 mb-8">
            Nossa metodologia exclusiva garante resultados rápidos e eficazes para os estudantes de Campo Grande-MS
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Benefit 1 */}
          <div className="benefit-card">
            <div className="flex flex-col items-center">
              <div className="bg-tutoring-orange p-4 rounded-full text-white inline-flex mb-4">
                <Home size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Atendimento Domiciliar</h3>
              <p className="text-gray-600 text-center">
                Aulas no conforto da sua casa em qualquer bairro de Campo Grande-MS, sem perda de tempo com deslocamentos
              </p>
            </div>
          </div>
          
          {/* Benefit 2 */}
          <div className="benefit-card">
            <div className="flex flex-col items-center">
              <div className="bg-tutoring-orange p-4 rounded-full text-white inline-flex mb-4">
                <Award size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Professores Especialistas</h3>
              <p className="text-gray-600 text-center">
                Equipe com 12 anos de experiência nas disciplinas do ensino fundamental e médio
              </p>
            </div>
          </div>
          
          {/* Benefit 3 */}
          <div className="benefit-card">
            <div className="flex flex-col items-center">
              <div className="bg-tutoring-orange p-4 rounded-full text-white inline-flex mb-4">
                <TrendingUp size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Método Personalizado</h3>
              <p className="text-gray-600 text-center">
                Abordagem que respeita o ritmo do seu filho, com 97% dos pais notando diferença em apenas 3 semanas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
