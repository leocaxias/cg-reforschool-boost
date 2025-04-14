
import React from 'react';
import { Home, Award, TrendingUp } from 'lucide-react';
import LeadForm from './LeadForm';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
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
            
            <div className="mt-8">
              <LeadForm />
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                ★★★★★
              </div>
              <span className="text-sm text-gray-600">Baseado em 156 avaliações</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <img 
              src="/public/lovable-uploads/f4f4f1e4-2fab-4884-b3e1-fdfd28173026.png" 
              alt="Como funciona o serviço de aulas particulares em domicílio" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
