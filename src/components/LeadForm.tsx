
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const LeadForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Entraremos em contato em breve para agendar sua aula gratuita.",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Button 
        type="submit" 
        className="cta-button w-full bg-blue-600 hover:bg-blue-700"
      >
        Agende Sua Aula Grátis
      </Button>
      
      <div className="text-center text-xs text-gray-500">
        <p>Você está a um clique de turbinar em 100% os estudos do seu filho</p>
      </div>
    </form>
  );
};

export default LeadForm;
