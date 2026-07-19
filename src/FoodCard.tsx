import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { MenuItem } from './menuData';
import { Trash2 } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
  onRemove?: (id: number) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onRemove }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.remove-btn')) {
      return;
    }
    navigate(`/menu/${item.id}`);
  };

  return (
    <div className="food-card" onClick={handleClick}>
      <div className="image-container">
        <img src={item.image} alt={item.name} className="food-image" />
        <span className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`}>
          {item.isVeg ? 'Veg' : 'Non-Veg'}
        </span>
      </div>

      <div className="card-content">
        <span className="category-label">{item.category.toUpperCase()}</span>
        <h3 className="food-name">{item.name}</h3>
        <p className="food-description">{item.description}</p>
        <span className="servings-text">{item.servings}</span>

        {onRemove && (
          <button
            type="button"
            className="remove-btn"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(item.id);
            }}
          >
            <Trash2 size={16} />
            <span>Remove</span>
          </button>
        )}
      </div>
    </div>
  );
};
