
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FaqSection = () => {
  const faqs = [
    {
      question: "Vocês atendem em qual região de Campo Grande?",
      answer: "Atendemos em todos os bairros de Campo Grande-MS sem taxa adicional de deslocamento."
    },
    {
      question: "Quais disciplinas vocês oferecem reforço?",
      answer: "Todas as matérias do ensino fundamental e médio, incluindo preparação para vestibulares e ENEM."
    },
    {
      question: "Como é a avaliação diagnóstica gratuita?",
      answer: "É uma sessão de 1 hora na sua casa onde identificamos as dificuldades do aluno e traçamos um plano personalizado."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "97% dos nossos alunos apresentam melhora nas notas em até 3 semanas de acompanhamento."
    },
    {
      question: "Posso escolher os dias e horários das aulas?",
      answer: "Sim! Adaptamos nossos horários à sua rotina, incluindo fins de semana."
    },
    {
      question: "Os professores são qualificados?",
      answer: "Todos são licenciados nas respectivas áreas e possuem no mínimo 5 anos de experiência."
    }
  ];
  
  return (
    <section className="py-12 md:py-20 bg-orange-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Perguntas Frequentes</h2>
        
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-tutoring-text hover:text-tutoring-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
