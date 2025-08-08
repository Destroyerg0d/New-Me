import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/ui/stat-card';
import { ProgressRing } from '@/components/ui/progress-ring';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Target, 
  TrendingUp, 
  Zap, 
  Award,
  CheckCircle,
  BarChart3,
  Flame,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Real data - will be populated from Supabase submissions and onboarding
  const weeklyProgress = 0;
  const monthlyGoals = 0; // From onboarding goals
  const completedGoals = 0; // From actual submissions
  const currentStreak = 0; // Calculate from consecutive daily submissions

  const recentActivities: Array<{ date: string; activity: string; mood: string; score: number }> = [];

  const quickActions = [
    { title: 'Daily Check-in', href: '/daily', icon: Calendar, color: 'primary' },
    { title: 'Weekly Review', href: '/weekly', icon: Target, color: 'success' },
    { title: 'View Progress', href: '/progress', icon: BarChart3, color: 'warning' },
  ];

  return (
    <div className="min-h-screen bg-background p-6 ml-64">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome to Your Growth Journey
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your progress, celebrate wins, and keep building momentum toward the New You.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Current Streak"
            value={`${currentStreak} days`}
            change={{ value: 0, label: 'vs last week', positive: true }}
            icon={Flame}
            gradient
          />
          <StatCard
            title="Weekly Progress"
            value={`${weeklyProgress}%`}
            change={{ value: 0, label: 'vs last week', positive: true }}
            icon={TrendingUp}
          />
          <StatCard
            title="Monthly Goals"
            value={monthlyGoals > 0 ? `${completedGoals}/${monthlyGoals}` : 'No goals set'}
            change={{ value: monthlyGoals > 0 ? Math.round((completedGoals / monthlyGoals) * 100) : 0, label: 'completion rate', positive: true }}
            icon={Target}
          />
          <StatCard
            title="Total Sessions"
            value="0"
            change={{ value: 0, label: 'this month', positive: true }}
            icon={CheckCircle}
          />
        </div>

        {/* Progress Rings and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Overview */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>This Week's Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <ProgressRing 
                    progress={weeklyProgress} 
                    color="primary"
                    size={120}
                  />
                  <p className="text-sm text-muted-foreground mt-2">Overall</p>
                </div>
                <div className="text-center">
                  <ProgressRing 
                    progress={0} 
                    color="success"
                    size={100}
                  />
                  <p className="text-sm text-muted-foreground mt-2">Habits</p>
                </div>
                <div className="text-center">
                  <ProgressRing 
                    progress={0} 
                    color="warning"
                    size={100}
                  />
                  <p className="text-sm text-muted-foreground mt-2">Check-ins</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action) => (
                <Link key={action.title} to={action.href}>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start space-x-3 h-12 button-glow"
                  >
                    <action.icon className="h-5 w-5" />
                    <span>{action.title}</span>
                  </Button>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivities.length > 0 ? (
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-accent/50 border border-border/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{activity.mood}</div>
                      <div>
                        <p className="font-medium text-foreground">{activity.activity}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-lg font-bold text-primary">
                        {activity.score}/10
                      </div>
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Complete your first check-in to see recent activity
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Motivational Quote */}
        <Card className="card-glow gradient-motivation text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Today's Motivation</h3>
            <p className="text-lg italic">
              "Success is the sum of small efforts repeated day in and day out."
            </p>
            <p className="text-sm mt-2 opacity-80">- Robert Collier</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;