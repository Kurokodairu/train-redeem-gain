
import React from 'react';
import { Cat, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  points?: number;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ points = 0, username = "" }) => {
  return (
    <header className="bg-white shadow-sm py-4 mb-8">
      <div className="fitness-container flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Cat className="h-8 w-8 text-fitness-primary" />
          <div className="flex items-center">
            <span className="font-bold text-lg text-fitness-primary">{points}</span>
            <span className="text-sm text-fitness-muted ml-2">poeng</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-sm text-fitness-muted">{username || "Gjest"}</div>
          
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Brukernavn" 
              className="fitness-input w-36"
            />
            <Button className="absolute right-0 top-0 bottom-0 rounded-l-none" variant="default">
              Hent
            </Button>
          </div>
          <div className="flex flex-col ml-2">
            <Button size="icon" variant="outline" className="p-0 h-7 w-7 mb-1">
              <Plus className="h-3 w-3" />
            </Button>
            <Button size="icon" variant="outline" className="p-0 h-7 w-7">
              <Minus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
