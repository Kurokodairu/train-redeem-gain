
import React from 'react';
import Modal from './Modal';
import AddWorkoutForm from './AddWorkoutForm';

interface WorkoutFormData {
  date: string;
  type: string;
  description: string;
  duration: string;
}

interface AddWorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: WorkoutFormData) => void;
}

const AddWorkoutModal: React.FC<AddWorkoutModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = (data: WorkoutFormData) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Legg til økt"
    >
      <AddWorkoutForm 
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
};

export default AddWorkoutModal;
