
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
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
    if (!formData.name || !formData.phone || !formData.grade) {
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
      grade: '',
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-tutoring-text font-semibold">Nome do Responsável</Label>
        <Input
          id="name"
          name="name"
          placeholder="Seu nome completo"
          className="w-full border-2 border-gray-300 p-3 rounded-lg"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-tutoring-text font-semibold">WhatsApp / Telefone</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="(67) 99999-9999"
          className="w-full border-2 border-gray-300 p-3 rounded-lg"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="grade" className="text-tutoring-text font-semibold">Série do Aluno</Label>
        <Input
          id="grade"
          name="grade"
          placeholder="Ex: 7º ano do fundamental"
          className="w-full border-2 border-gray-300 p-3 rounded-lg"
          value={formData.grade}
          onChange={handleChange}
        />
      </div>
      
      <div className="mt-6">
        <Button 
          type="submit" 
          className="cta-button w-full animate-pulse-scale"
        >
          Agende Sua Avaliação Gratuita
        </Button>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-2">
        <p>Sem compromisso. Diagnóstico totalmente gratuito.</p>
      </div>
    </form>
  );
};

export default LeadForm;
