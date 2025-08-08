import React from 'react';
import { DynamicForm } from '@/components/forms/dynamic-form';
import { getTemplateByFrequency } from '@/lib/templates';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const DailyCheckin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const templates = getTemplateByFrequency('daily');
  const template = templates[0]; // Get the daily template

  const handleSubmit = (data: any) => {
    // In a real app, save to Supabase here
    console.log('Daily check-in data:', data);
    
    toast({
      title: "Daily Check-in Complete! 🌟",
      description: "Another step forward on your journey. You're building unstoppable momentum!",
      duration: 4000,
    });

    // Navigate back to dashboard after a short delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  if (!template) {
    return (
      <div className="min-h-screen bg-background p-6 ml-64 flex items-center justify-center">
        <p className="text-muted-foreground">No daily template found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background ml-64">
      <DynamicForm 
        template={template} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default DailyCheckin;