import React from 'react';
import { DynamicForm } from '@/components/forms/dynamic-form';
import { getTemplateByFrequency } from '@/lib/templates';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Target, Rocket } from 'lucide-react';

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const templates = getTemplateByFrequency('onboarding');
  const template = templates[0]; // Get the onboarding template

  const handleSubmit = (data: any) => {
    // In a real app, save to Supabase here
    console.log('Onboarding data:', data);
    
    toast({
      title: "Welcome to Your Journey! 🎯",
      description: "Your profile is set up. Time to start building the New You!",
      duration: 4000,
    });

    // Navigate to dashboard after setup
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  if (!template) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <p className="text-muted-foreground">No onboarding template found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Hero Section */}
      <div className="text-center py-12 px-6">
        <div className="flex justify-center items-center space-x-2 mb-6">
          <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          <h1 className="text-5xl font-bold gradient-motivation bg-clip-text text-transparent">
            Welcome to New Me
          </h1>
          <Sparkles className="h-8 w-8 text-primary animate-pulse" />
        </div>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Your personal growth journey starts here. Let's define your vision and set the foundation for becoming the best version of yourself.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="card-glow hover:scale-105 transition-smooth">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Set Clear Goals</h3>
              <p className="text-sm text-muted-foreground">
                Define your vision and break it down into actionable milestones
              </p>
            </CardContent>
          </Card>

          <Card className="card-glow hover:scale-105 transition-smooth">
            <CardContent className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-sm text-muted-foreground">
                Daily, weekly, and monthly check-ins to keep you on track
              </p>
            </CardContent>
          </Card>

          <Card className="card-glow hover:scale-105 transition-smooth">
            <CardContent className="p-6 text-center">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Level Up</h3>
              <p className="text-sm text-muted-foreground">
                Gamified experience with streaks, badges, and achievements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Onboarding Form */}
      <DynamicForm 
        template={template} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default Onboarding;