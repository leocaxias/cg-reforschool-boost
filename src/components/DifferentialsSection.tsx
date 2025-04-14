
import React from 'react';
import { MapPin, Shapes, Award, Clock } from 'lucide-react';

const DifferentialsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-orange-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Por Que Escolher Nosso Reforço Escolar</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {/* Differential 1 */}
          <div className="benefit-card">
            <div className="flex flex-col items-center">
              <div className="bg-tutoring-orange p-3 rounded-full text-white inline-flex mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">
                Atendimento em Toda Campo Grande-MS
              </h3>
              <p className="text-gray-600 text-center">
                Professores se deslocam até você, sem custo adicional
              </p>
            </div>
          </div>
          
          {/* Differential 2 */}
          <div className="benefit-card">
            <div className="flex flex-col items-center">
              <div className="bg-tutoring-orange p-3 rounded-full text-white inline-flex mb-4">
                <Shapes size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">
                Metodologia que Respeita o Ritmo do Aluno
              </h3>
              <p className="text-gray-600 text-center">
                97% dos pais notam diferença em apenas 3 semanas
              </p>
            </div>
          </div>
          
          {/* Differential 3 */}
          <div className="benefit-card">
            <div className="flex flex-col items-center">
              <div className="bg-tutoring-orange p-3 rounded-full text-white inline-flex mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">
                12 Anos de Experiência
              </h3>
              <p className="text-gray-600 text-center">
                Mais de 500 alunos atendidos em Campo Grande-MS
              </p>
            </div>
          </div>
          
          {/* Differential 4 */}
          <div className="benefit-card">
            <div className="flex flex-col items-center">
              <div className="bg-tutoring-orange p-3 rounded-full text-white inline-flex mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">
                Flexibilidade de Horários
              </h3>
              <p className="text-gray-600 text-center">
                Aulas pela manhã, tarde ou noite, inclusive aos sábados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
