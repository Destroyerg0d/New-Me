import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProgressRing } from '@/components/ui/progress-ring';
import { StatCard } from '@/components/ui/stat-card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  Flame,
  Star,
  BarChart3
} from 'lucide-react';

const Progress = () => {
  // Real data - will be populated from user submissions and onboarding
  const progressData: Array<{ date: string; confidence?: number; energy?: number; focus?: number }> = [];
  const habitData: Array<{ habit: string; completed: number; total: number }> = [];
  const timeData: Array<{ name: string; value: number; color: string }> = [];
  
  const achievements = [
    { title: '7-Day Streak', description: 'Completed daily check-ins for a week', icon: Flame, earned: false },
    { title: 'Consistency King', description: 'Perfect week of habit tracking', icon: Award, earned: false },
    { title: 'Reflection Master', description: 'Completed 4 weekly reviews', icon: Star, earned: false },
    { title: 'Goal Crusher', description: 'Achieved 5 monthly goals', icon: Target, earned: false },
  ];

  // Calculate real metrics from user data
  const totalSubmissions = 0; // Will come from actual submissions
  const currentStreak = 0;
  const avgConfidence = 0;
  const goalsCompleted = 0;
  const goalsTotal = 15; // From onboarding or user settings

  return (
    <div className="min-h-screen bg-background p-6 ml-64">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Your Progress Journey</h1>
          <p className="text-muted-foreground text-lg">
            Visualize your growth and celebrate every milestone
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Submissions"
            value={totalSubmissions.toString()}
            change={{ value: 0, label: 'this month', positive: true }}
            icon={Calendar}
            gradient
          />
          <StatCard
            title="Avg. Confidence"
            value={avgConfidence > 0 ? `${avgConfidence.toFixed(1)}/10` : 'No data'}
            change={{ value: 0, label: 'vs last month', positive: true }}
            icon={TrendingUp}
          />
          <StatCard
            title="Goals Completed"
            value={`${goalsCompleted}/${goalsTotal}`}
            change={{ value: Math.round((goalsCompleted / goalsTotal) * 100), label: 'completion rate', positive: true }}
            icon={Target}
          />
          <StatCard
            title="Current Streak"
            value={`${currentStreak} days`}
            change={{ value: 0, label: 'personal best', positive: true }}
            icon={Flame}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Over Time */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Progress Over Time</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="confidence" stroke="hsl(var(--primary))" strokeWidth={3} />
                  <Line type="monotone" dataKey="energy" stroke="hsl(var(--success))" strokeWidth={3} />
                  <Line type="monotone" dataKey="focus" stroke="hsl(var(--warning))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Habit Completion */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Weekly Habit Completion</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={habitData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="habit" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="completed" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Time Distribution and Life Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Time Distribution Pie Chart */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle>Time Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={timeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {timeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Life Areas Progress */}
          <Card className="card-glow lg:col-span-2">
            <CardHeader>
              <CardTitle>Life Areas Progress</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Life areas will be populated from onboarding data */}
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Complete more check-ins to see your life areas progress
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Achievements & Badges</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border text-center transition-smooth ${
                    achievement.earned 
                      ? 'bg-primary/10 border-primary/20 shadow-glow' 
                      : 'bg-muted/20 border-border/50 opacity-60'
                  }`}
                >
                  <achievement.icon className={`h-8 w-8 mx-auto mb-2 ${
                    achievement.earned ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <h3 className="font-semibold text-sm">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <div className="text-xs text-primary font-medium mt-2">✓ Earned</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;