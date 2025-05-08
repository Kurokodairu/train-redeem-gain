
import React, { useState } from 'react';
import { CalendarIcon, Clock } from 'lucide-react';

interface AddWorkoutFormProps {
  onSubmit: (data: WorkoutFormData) => void;
  onCancel: () => void;
}

interface WorkoutFormData {
  date: string;
  type: string;
  description: string;
  duration: string;
}

const AddWorkoutForm: React.FC<AddWorkoutFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<WorkoutFormData>({
    date: new Date().toISOString().split('T')[0],
    type: '',
    description: '',
    duration: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-fitness-muted mb-1" htmlFor="date">
          Dato
        </label>
        <div className="relative">
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="fitness-input w-full pl-10"
            required
          />
          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-fitness-muted h-5 w-5" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-fitness-muted mb-1" htmlFor="type">
          Type økt
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="fitness-input w-full"
          required
        >
          <option value="" disabled>Velg økttype</option>
          <option value="Pilates">Pilates</option>
          <option value="Vann">Vann</option>
          <option value="Styrke">Styrke</option>
          <option value="Kondisjon">Kondisjon</option>
          <option value="Annet">Annet</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-fitness-muted mb-1" htmlFor="description">
          Beskrivelse
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="fitness-input w-full min-h-[80px]"
          placeholder="Beskriv din økt her..."
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-fitness-muted mb-1" htmlFor="duration">
          Varighet
        </label>
        <div className="relative">
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="fitness-input w-full pl-10"
            placeholder="f.eks. 45 min"
          />
          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-fitness-muted h-5 w-5" />
        </div>
      </div>
      
      <div className="flex justify-end gap-3 pt-4">
        <button 
          type="button" 
          onClick={onCancel}
          className="fitness-button-secondary"
        >
          Avbryt
        </button>
        <button 
          type="submit" 
          className="fitness-button-primary"
        >
          Lagre økt
        </button>
      </div>
    </form>
  );
};

export default AddWorkoutForm;
