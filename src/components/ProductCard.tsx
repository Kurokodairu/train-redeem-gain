
import React from 'react';
import { Gift, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  description, 
  price, 
  onAddToCart 
}) => {
  return (
    <div className="fitness-card p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="bg-gradient-fitness bg-opacity-10 p-2 rounded-full">
          <Gift className="h-5 w-5 text-fitness-primary" />
        </div>
      </div>
      
      <p className="text-fitness-muted mb-6 flex-grow">{description}</p>
      
      <div className="flex justify-between items-center mt-2">
        <div className="font-bold text-lg text-fitness-primary">{price} poeng</div>
        <button 
          onClick={onAddToCart}
          className="fitness-button-primary flex items-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Løs inn</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
