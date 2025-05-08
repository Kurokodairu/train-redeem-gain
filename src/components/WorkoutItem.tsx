
import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkoutItemProps {
  date: string;
  description: string;
  duration?: string;
  type?: string;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({ 
  date, 
  description, 
  duration, 
  type = "other"
}) => {
  const getBadgeColor = (workoutType: string) => {
    switch(workoutType.toLowerCase()) {
      case "pilates":
        return "fitness-badge-purple";
      case "vann":
        return "fitness-badge-blue";
      default:
        return "fitness-badge-green";
    }
  };

  return (
    <li className="flex items-start gap-3 py-3 border-b border-fitness-border last:border-0">
      <div className={cn(
        "flex-shrink-0 w-2 h-2 mt-2 rounded-full animate-pulse-gentle",
        type.toLowerCase().includes("pilates") ? "bg-purple-500" :
        type.toLowerCase().includes("vann") ? "bg-blue-500" : "bg-green-500"
      )} />
      
      <div className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-fitness-muted mb-1">
          <CalendarDays className="h-3.5 w-3.5" />
          <span>{date}</span>
          {duration && (
            <>
              <span className="mx-1">•</span>
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </>
          )}
        </div>
        <p className="text-fitness-text">{description}</p>
      </div>
      
      {type && (
        <div className={getBadgeColor(type)}>
          {type}
        </div>
      )}
    </li>
  );
};

export default WorkoutItem;
