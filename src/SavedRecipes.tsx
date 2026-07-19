import React from 'react';
import { Link } from 'react-router-dom';
import { useSavedRecipes } from './SavedRecipesContext';
import { FoodCard } from './FoodCard';
import { ArrowLeft, HeartOff } from 'lucide-react';

export const SavedRecipes: React.FC = () => {
  const { savedRecipes, removeRecipe } = useSavedRecipes();

  return (
    <div className="saved-recipes-container">
      <header className="saved-header">
        <div className="header-left">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            <span>Back to Menu</span>
          </Link>
          <h1 className="saved-title">Saved Recipes</h1>
          <p className="saved-subtitle">
            {savedRecipes.length} {savedRecipes.length === 1 ? 'recipe' : 'recipes'} in your collection
          </p>
        </div>
      </header>

      <main className="saved-main">
        {savedRecipes.length > 0 ? (
          <div className="food-grid">
            {savedRecipes.map((item) => (
              <FoodCard 
                key={item.id} 
                item={item} 
                onRemove={removeRecipe} 
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <HeartOff size={48} className="empty-icon" />
            <h3>No saved recipes yet</h3>
            <p>Your saved recipes collection is empty. Explore our party menu to add your favourites.</p>
            <Link to="/" className="browse-menu-btn">
              Browse Menu
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};
