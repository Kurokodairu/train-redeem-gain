
import React from 'react';
import Modal from './Modal';
import WorkoutItem from './WorkoutItem';
import { Search } from 'lucide-react';

interface Workout {
  id: string;
  date: string;
  description: string;
  duration?: string;
  type?: string;
}

interface ViewWorkoutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  workouts: Workout[];
}

const ViewWorkoutsModal: React.FC<ViewWorkoutsModalProps> = ({ 
  isOpen, 
  onClose, 
  workouts 
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Mine økter"
      className="max-w-2xl"
    >
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-fitness-muted h-5 w-5" />
          <input 
            type="text"
            placeholder="Søk i økter..."
            className="fitness-input w-full pl-10"
          />
        </div>
      </div>
      
      {workouts.length > 0 ? (
        <div className="max-h-[60vh] overflow-y-auto pr-2">
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
        </div>
      ) : (
        <div className="text-center py-8 text-fitness-muted">
          Ingen økter funnet.
        </div>
      )}
      
      <div className="flex justify-end mt-6">
        <button 
          onClick={onClose}
          className="fitness-button-secondary"
        >
          Lukk
        </button>
      </div>
    </Modal>
  );
};

export default ViewWorkoutsModal;
