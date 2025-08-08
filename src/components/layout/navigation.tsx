import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Calendar, 
  BarChart3, 
  Target, 
  Settings, 
  Zap,
  CalendarDays,
  CalendarRange,
  CalendarCheck
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Daily Check-in', href: '/daily', icon: Calendar },
  { name: 'Weekly Review', href: '/weekly', icon: CalendarDays },
  { name: 'Monthly Goals', href: '/monthly', icon: CalendarRange },
  { name: 'Yearly Vision', href: '/yearly', icon: CalendarCheck },
  { name: 'Progress', href: '/progress', icon: BarChart3 },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-full w-64 card-glow border-r border-border/50 p-6 z-50">
      <div className="flex items-center space-x-2 mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">New Me</h1>
          <p className="text-xs text-muted-foreground">Your Growth Journey</p>
        </div>
      </div>

      <div className="space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-smooth",
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary-glow/10 p-4 border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Daily Streak</span>
          </div>
          <div className="text-2xl font-bold text-primary">7 days</div>
          <p className="text-xs text-muted-foreground">Keep it up! 🔥</p>
        </div>
      </div>
    </nav>
  );
};