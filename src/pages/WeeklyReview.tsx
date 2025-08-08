import React from 'react';
import { DynamicForm } from '@/components/forms/dynamic-form';
import { getTemplateByFrequency } from '@/lib/templates';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const WeeklyReview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const templates = getTemplateByFrequency('weekly');
  const template = templates[0]; // Get the weekly template

  const handleSubmit = (data: any) => {
    // In a real app, save to Supabase here
    console.log('Weekly review data:', data);
    
    toast({
      title: "Weekly Review Complete! 🚀",
      description: "Powerful reflection leads to powerful growth. You're leveling up!",
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
        <p className="text-muted-foreground">No weekly template found.</p>
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

export default WeeklyReview;