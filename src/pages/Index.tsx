import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  Calendar, 
  Award, 
  Rocket,
  Zap,
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Define your vision and break it down into actionable milestones'
    },
    {
      icon: Calendar,
      title: 'Daily Check-ins',
      description: 'Track your progress with guided daily, weekly, and monthly reflections'
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Visualize your growth with beautiful charts and insights'
    },
    {
      icon: Award,
      title: 'Gamification',
      description: 'Earn badges, maintain streaks, and celebrate every victory'
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor your improvement across all areas of life'
    },
    {
      icon: Star,
      title: 'Personal Insights',
      description: 'Get personalized feedback based on your reflection patterns'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <h1 className="text-6xl font-bold gradient-motivation bg-clip-text text-transparent">
                New Me
              </h1>
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Your personal growth companion. Track progress, build habits, and become the best version of yourself—one day at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/onboarding">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold button-glow">
                  Start Your Journey <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  View Dashboard <BarChart3 className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="card-glow text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">Daily Progress</h3>
                <p className="text-muted-foreground">Track your energy, focus, and wins every day</p>
              </CardContent>
            </Card>
            
            <Card className="card-glow text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">Habit Building</h3>
                <p className="text-muted-foreground">Build lasting habits with streak tracking</p>
              </CardContent>
            </Card>
            
            <Card className="card-glow text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-warning mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">Growth Analytics</h3>
                <p className="text-muted-foreground">Visualize your improvement over time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit designed to help you build better habits, track progress, and achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-glow hover:scale-105 transition-smooth">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card-glow rounded-2xl p-12 gradient-motivation text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Become the New You?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of people who are already transforming their lives, one day at a time.
            </p>
            <Link to="/onboarding">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
                Start Free Today <Star className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
