
import React from 'react';
import { Dumbbell } from 'lucide-react';

interface HeaderProps {
  points?: number;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ points = 0, username = "" }) => {
  return (
    <header className="bg-white shadow-sm py-4 mb-8">
      <div className="fitness-container flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-fitness p-2 rounded-lg">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-fitness-text">TrainRedeem</h1>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-sm text-fitness-muted">Poeng:</span>
              <span className="font-bold text-fitness-primary">{points}</span>
            </div>
            <div className="text-sm text-fitness-muted">{username || "Gjest"}</div>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Brukernavn" 
              className="fitness-input w-36"
            />
            <button className="fitness-button-primary absolute right-0 top-0 bottom-0 rounded-l-none">
              Hent
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
