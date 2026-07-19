import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMenuItemById } from './menuData';
import { useSavedRecipes } from './SavedRecipesContext';
import { ArrowLeft, Heart, Users, Clock, Flame, ListChecks, CheckCircle } from 'lucide-react';

export const FoodDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isSaved, saveRecipe, removeRecipe, savedRecipes } = useSavedRecipes();

  const item = useMemo(() => {
    const numericId = id ? parseInt(id, 10) : NaN;
    if (isNaN(numericId)) return undefined;
    return getMenuItemById(numericId);
  }, [id]);

  if (!item) {
    return (
      <div className="detail-not-found">
        <h2>Dish Not Found</h2>
        <p>The dish you are looking for does not exist or has been removed.</p>
        <Link to="/" className="back-btn">
          <ArrowLeft size={16} />
          <span>Back to Menu</span>
        </Link>
      </div>
    );
  }

  const recipeSaved = isSaved(item.id);

  const handleToggleSave = () => {
    if (recipeSaved) {
      removeRecipe(item.id);
    } else {
      saveRecipe(item);
    }
  };

  return (
    <div className="detail-container">
      <header className="detail-header">
        <button onClick={() => navigate(-1)} className="back-nav-btn">
          <ArrowLeft size={18} />
          <span>Back to Menu</span>
        </button>
        <Link to="/saved-recipes" className="saved-recipes-link">
          <Heart size={18} className="heart-icon" />
          <span>Saved Recipes</span>
          {savedRecipes.length > 0 && (
            <span className="count-badge">{savedRecipes.length}</span>
          )}
        </Link>
      </header>

      <main className="detail-main-card">
        <div className="detail-visual">
          <div className="detail-image-wrapper">
            <img src={item.image} alt={item.name} className="detail-image" />
            <div className="badge-overlay">
              <span className="detail-category-badge">{item.category.toUpperCase()}</span>
              <span className={`detail-diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`}>
                {item.isVeg ? 'Veg' : 'Non-Veg'}
              </span>
            </div>
          </div>
          <div className="detail-quick-stats">
            <div className="stat-box">
              <Users size={20} className="stat-icon" />
              <span>{item.servings}</span>
            </div>
            <div className="stat-box">
              <Clock size={20} className="stat-icon" />
              <span>25-35 mins</span>
            </div>
            <div className="stat-box">
              <Flame size={20} className="stat-icon" />
              <span>{item.isVeg ? 'Medium Spice' : 'Rich & Hearty'}</span>
            </div>
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-title-group">
            <h1 className="detail-name">{item.name}</h1>
            <button
              onClick={handleToggleSave}
              className={`save-toggle-btn ${recipeSaved ? 'saved' : ''}`}
            >
              <Heart size={20} className={recipeSaved ? 'heart-filled' : ''} />
              <span>{recipeSaved ? 'Saved' : 'Save Recipe'}</span>
            </button>
          </div>

          <div className="detail-section">
            <h3>Description</h3>
            <p className="detail-full-description">{item.fullDescription}</p>
          </div>

          <div className="detail-section">
            <h3>
              <ListChecks size={18} className="section-title-icon" />
              <span>Ingredients</span>
            </h3>
            <ul className="ingredients-list">
              {item.ingredients.map((ing, idx) => (
                <li key={idx} className="ingredient-item">
                  <CheckCircle size={16} className="bullet-icon" />
                  <span className="ingredient-name">{ing.name}</span>
                  <span className="ingredient-qty">{ing.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
