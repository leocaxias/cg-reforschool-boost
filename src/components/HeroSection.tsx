
import React from 'react';
import { Home, Award, TrendingUp } from 'lucide-react';
import LeadForm from './LeadForm';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 bg-tutoring-gray">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="urgency-badge">
              <span>4 Vagas Restantes para o Mês de Abril</span>
            </div>
            
            <h1 className="font-nunito font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-tutoring-text">
              Impulsione o <span className="text-tutoring-orange">Reforço Escolar</span> de Seu Filho
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-gray-700">
              Descubra Quais Assuntos Seu Filho Precisa Revisar para Melhorar as Notas na Escola
            </h2>
            
            <p className="text-lg text-gray-600 font-medium">
              Você está a um clique de turbinar em 100% os estudos do seu filho
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:hidden">
              <button className="cta-button w-full sm:w-auto">
                Agende Sua Avaliação Gratuita
              </button>
            </div>

            <div className="hidden md:flex flex-col gap-6 mt-8 lg:max-w-xl">
              <div className="flex items-start gap-4">
                <div className="bg-tutoring-orange p-2 rounded-full text-white">
                  <Home size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Atendimento Domiciliar</h3>
                  <p className="text-gray-600">Aulas no conforto da sua casa em Campo Grande-MS</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-tutoring-orange p-2 rounded-full text-white">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Professores Especialistas</h3>
                  <p className="text-gray-600">12 anos de experiência com ensino fundamental e médio</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-tutoring-orange p-2 rounded-full text-white">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Método Personalizado</h3>
                  <p className="text-gray-600">97% dos pais notam diferença em apenas 3 semanas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="bg-orange-100 p-1 md:p-3 rounded-xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
