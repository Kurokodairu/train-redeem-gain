
import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import WorkoutList from '@/components/WorkoutList';
import ViewWorkoutsModal from '@/components/ViewWorkoutsModal';
import AddWorkoutModal from '@/components/AddWorkoutModal';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface Workout {
  id: string;
  date: string;
  description: string;
  duration?: string;
  type?: string;
}

interface WorkoutFormData {
  date: string;
  type: string;
  description: string;
  duration: string;
}

const Index = () => {
  // State
  const [points, setPoints] = useState(100);
  const [username, setUsername] = useState("");
  const [viewWorkoutsOpen, setViewWorkoutsOpen] = useState(false);
  const [addWorkoutOpen, setAddWorkoutOpen] = useState(false);

  // Example products
  const products: Product[] = [
    {
      id: "1",
      name: "Treningsuke",
      description: "En uke gratis medlemskap på treningssenteret.",
      price: 75,
    },
    {
      id: "2",
      name: "Personlig trener",
      description: "En time med personlig trener for å optimalisere treningsrutinen din.",
      price: 150,
    },
    {
      id: "3",
      name: "Treningsdrakt",
      description: "Komplett treningsdrakt i høy kvalitet med senterets logo.",
      price: 200,
    },
  ];

  // Example workouts
  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      id: "1",
      date: "8. mai 2025",
      description: "Pilates: 15 min",
      duration: "15 min",
      type: "Pilates"
    },
    {
      id: "2",
      date: "7. mai 2025",
      description: "Dag 2: gjorde noe",
      type: "Annet"
    },
    {
      id: "3",
      date: "7. mai 2025",
      description: "Andre gang: 0 vann",
      duration: "0 min",
      type: "Vann"
    },
    {
      id: "4",
      date: "7. mai 2025",
      description: "First test: 1L vann",
      duration: "1L",
      type: "Vann"
    },
  ]);

  // Handlers
  const handleAddToCart = (product: Product) => {
    if (points >= product.price) {
      setPoints(prev => prev - product.price);
      toast.success(`${product.name} lagt i handlekurven`);
    } else {
      toast.error("Du har ikke nok poeng");
    }
  };

  const handleAddWorkout = (data: WorkoutFormData) => {
    const newWorkout: Workout = {
      id: Date.now().toString(),
      date: new Date(data.date).toLocaleDateString('no-NO', { day: 'numeric', month: 'long', year: 'numeric' }),
      description: data.description,
      duration: data.duration,
      type: data.type
    };
    
    setWorkouts(prev => [newWorkout, ...prev]);
    setPoints(prev => prev + 25); // Add points for logging a workout
    toast.success("Økt registrert! Du har fått 25 poeng");
  };

  const handleUserLookup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    
    if (username) {
      setUsername(username);
      toast.success(`Velkommen, ${username}!`);
    }
  };

  return (
    <div className="min-h-screen bg-fitness-background">
      <Header points={points} username={username} />
      
      <div className="fitness-container">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Løs inn poeng:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <WorkoutList
            workouts={workouts.slice(0, 5)} // Show only the most recent
            onViewAll={() => setViewWorkoutsOpen(true)}
            onAddWorkout={() => setAddWorkoutOpen(true)}
          />
        </div>
      </div>
      
      {/* Modals */}
      <ViewWorkoutsModal
        isOpen={viewWorkoutsOpen}
        onClose={() => setViewWorkoutsOpen(false)}
        workouts={workouts}
      />
      
      <AddWorkoutModal
        isOpen={addWorkoutOpen}
        onClose={() => setAddWorkoutOpen(false)}
        onSubmit={handleAddWorkout}
      />
    </div>
  );
};

export default Index;
