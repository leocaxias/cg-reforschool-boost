
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Entraremos em contato em breve para agendar sua avaliação gratuita.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          name="name"
          placeholder="Nome completo"
          className="w-full border border-gray-300 rounded-md"
          value={formData.name}
          onChange={handleChange}
        />
        
        <Input
          name="phone"
          placeholder="WhatsApp / Telefone"
          className="w-full border border-gray-300 rounded-md"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      
      <Button 
        type="submit" 
        className="cta-button w-full bg-blue-600 hover:bg-blue-700"
      >
        Agende Sua Avaliação Gratuita
      </Button>
      
      <div className="text-center text-xs text-gray-500">
        <p>Nunca compartilharemos seus dados com terceiros.</p>
      </div>
    </form>
  );
};

export default LeadForm;
