import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  icon?: LucideIcon;
  className?: string;
  gradient?: boolean;
}

export const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  className,
  gradient = false
}: StatCardProps) => {
  return (
    <div className={cn(
      "card-glow rounded-lg p-6 transition-smooth hover:scale-105",
      gradient && "gradient-motivation",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className={cn(
            "text-sm font-medium",
            gradient ? "text-white/80" : "text-muted-foreground"
          )}>
            {title}
          </p>
          <p className={cn(
            "text-2xl font-bold",
            gradient ? "text-white" : "text-foreground"
          )}>
            {value}
          </p>
          {change && (
            <div className="flex items-center space-x-1">
              <span className={cn(
                "text-xs font-medium",
                change.positive ? "text-success" : "text-destructive",
                gradient && "text-white/90"
              )}>
                {change.positive ? "↗" : "↘"} {Math.abs(change.value)}%
              </span>
              <span className={cn(
                "text-xs",
                gradient ? "text-white/70" : "text-muted-foreground"
              )}>
                {change.label}
              </span>
            </div>
          )}
        </div>
        
        {Icon && (
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg",
            gradient ? "bg-white/10" : "bg-primary/10"
          )}>
            <Icon className={cn(
              "h-6 w-6",
              gradient ? "text-white" : "text-primary"
            )} />
          </div>
        )}
      </div>
    </div>
  );
};