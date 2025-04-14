
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Souza",
      location: "Jardim dos Estados",
      content: "Meu filho passou de 5 para 8 em matemática em apenas um mês de aulas. O professor vai à nossa casa duas vezes por semana e fez toda diferença!",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      location: "Centro",
      content: "Incrível como minha filha recuperou a confiança nas aulas de física. A professora é paciente e explica de um jeito que ela realmente entende. Nota 10!",
      rating: 5,
    },
    {
      id: 3,
      name: "Márcia Santos",
      location: "Tiradentes",
      content: "Meu filho de 10 anos tinha muita dificuldade em português. Depois de 2 meses de reforço, as notas melhoraram e ele até começou a gostar de leitura!",
      rating: 5,
    },
  ];
  
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">O Que Dizem os Pais e Alunos de Campo Grande</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-4">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">Bairro {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
