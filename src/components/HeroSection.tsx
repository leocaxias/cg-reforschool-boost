import React from 'react';
import { Home, Award, TrendingUp } from 'lucide-react';
import LeadForm from './LeadForm';
const HeroSection = () => {
  return <section className="py-12 md:py-20 bg-white">
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
            
            
            
            <div className="mt-8">
              <LeadForm />
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                ★★★★★
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  Avaliações 
                  <span className="inline-flex">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </span>
                <span className="ml-1">• 156 avaliações</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <img src="/lovable-uploads/57dff900-d89d-4bb3-8991-1208e1c7fd8b.png" alt="Professor ajudando aluno em aula de reforço escolar" className="max-w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;