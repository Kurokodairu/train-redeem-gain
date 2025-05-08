
import React from 'react';
import { CalendarClock, PlusCircle } from 'lucide-react';
import WorkoutItem from './WorkoutItem';

interface Workout {
  id: string;
  date: string;
  description: string;
  duration?: string;
  type?: string;
}

interface WorkoutListProps {
  workouts: Workout[];
  onViewAll: () => void;
  onAddWorkout: () => void;
}

const WorkoutList: React.FC<WorkoutListProps> = ({ 
  workouts, 
  onViewAll, 
  onAddWorkout 
}) => {
  return (
    <div className="fitness-card p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <CalendarClock className="h-5 w-5 text-fitness-primary" />
          <h2 className="text-xl font-bold">Ukas økter</h2>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={onViewAll} 
            className="fitness-button-secondary text-sm"
          >
            Mine økter
          </button>
          <button 
            onClick={onAddWorkout} 
            className="fitness-button-primary text-sm flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Legg til økt</span>
          </button>
        </div>
      </div>
      
      {workouts.length > 0 ? (
        <ul className="divide-y divide-fitness-border">
          {workouts.map((workout) => (
            <WorkoutItem
              key={workout.id}
              date={workout.date}
              description={workout.description}
              duration={workout.duration}
              type={workout.type}
            />
          ))}
        </ul>
      ) : (
        <div className="text-center py-8 text-fitness-muted">
          Ingen økter denne uken. Legg til din første økt!
        </div>
      )}
    </div>
  );
};

export default WorkoutList;
