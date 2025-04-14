
import React from 'react';
import { SearchCheck, ClipboardList, Home as HomeIcon, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-20 bg-orange-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Como Funcionam Nossas Aulas de Reforço</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {/* Step 1 */}
          <div className="step-card">
            <div className="bg-tutoring-yellow h-16 w-16 rounded-full flex items-center justify-center text-tutoring-text text-2xl font-bold mb-4">
              1
            </div>
            <div className="text-tutoring-orange mb-3">
              <SearchCheck size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Avaliação Diagnóstica Gratuita</h3>
            <p className="text-gray-600 text-center">
              Identificamos exatamente os pontos que precisam de atenção
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="step-card">
            <div className="bg-tutoring-yellow h-16 w-16 rounded-full flex items-center justify-center text-tutoring-text text-2xl font-bold mb-4">
              2
            </div>
            <div className="text-tutoring-orange mb-3">
              <ClipboardList size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Plano de Estudos Personalizado</h3>
            <p className="text-gray-600 text-center">
              Desenvolvemos um roteiro exclusivo para as necessidades do seu filho
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="step-card">
            <div className="bg-tutoring-yellow h-16 w-16 rounded-full flex items-center justify-center text-tutoring-text text-2xl font-bold mb-4">
              3
            </div>
            <div className="text-tutoring-orange mb-3">
              <HomeIcon size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Aulas Domiciliares</h3>
            <p className="text-gray-600 text-center">
              Professores vão até sua casa em Campo Grande-MS nos horários mais convenientes
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="step-card">
            <div className="bg-tutoring-yellow h-16 w-16 rounded-full flex items-center justify-center text-tutoring-text text-2xl font-bold mb-4">
              4
            </div>
            <div className="text-tutoring-orange mb-3">
              <LineChart size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Acompanhamento de Resultados</h3>
            <p className="text-gray-600 text-center">
              Relatórios periódicos sobre o progresso e ajustes quando necessário
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="cta-button">
            Quero Melhorar as Notas do Meu Filho
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
