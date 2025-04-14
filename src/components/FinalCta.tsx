
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCta = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-tutoring-orange to-tutoring-yellow text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="urgency-badge mb-6 inline-flex">
            <span>Apenas 4 Vagas Restantes para Abril</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme as Notas do Seu Filho Ainda Hoje
          </h2>
          
          <p className="text-xl mb-8">
            Avaliação diagnóstica gratuita e sem compromisso
          </p>
          
          <Button className="cta-button bg-white text-tutoring-orange hover:bg-gray-100 text-xl px-10 py-6">
            Quero Garantir Minha Vaga
          </Button>
          
          <p className="mt-6 text-lg">
            Satisfação garantida ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
