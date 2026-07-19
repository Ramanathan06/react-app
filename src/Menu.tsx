import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useSavedRecipes } from './SavedRecipesContext';
import { filterMenuItems } from './menuData';
import { FoodCard } from './FoodCard';
import { Search, LogOut, Heart, SlidersHorizontal, EyeOff, Utensils } from 'lucide-react';

type CategoryType = 'all' | 'starter' | 'main' | 'sides' | 'desert';
type DietType = 'all' | 'veg' | 'nonveg';

export const Menu: React.FC = () => {
  const { user, logout } = useAuth();
  const { savedRecipes } = useSavedRecipes();

  const [category, setCategory] = useState<CategoryType>('all');
  const [diet, setDiet] = useState<DietType>('all');
  const [searchInput, setSearchInput] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchInput);
  };

  const filteredItems = useMemo(() => {
    return filterMenuItems({
      category,
      diet,
      name: activeSearch,
    });
  }, [category, diet, activeSearch]);

  const handleReset = () => {
    setCategory('all');
    setDiet('all');
    setSearchInput('');
    setActiveSearch('');
  };

  return (
    <div className="menu-container">
      <header className="menu-header">
        <div className="header-left">
          <div className="brand-group">
            <Utensils className="brand-icon" size={24} />
            <h1 className="header-title">Party Menu</h1>
          </div>
          {user && <span className="welcome-msg">Welcome, {user.name}</span>}
        </div>
        <div className="header-right">
          <Link to="/saved-recipes" className="saved-recipes-link">
            <Heart size={18} className="heart-icon" />
            <span>Saved Recipes</span>
            {savedRecipes.length > 0 && (
              <span className="count-badge">{savedRecipes.length}</span>
            )}
          </Link>
          <button onClick={logout} className="logout-btn">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Exquisite Culinary Delights</h2>
          <p>Curate the perfect selection for your special occasion</p>
        </div>
      </section>

      <section className="filters-section">
        <div className="filters-glass-box">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search dishes by name..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="search-input"
              />
            </div>
            <button type="submit" className="search-submit-btn">
              Search
            </button>
          </form>

          <div className="chips-container-wrapper">
            <div className="filter-group">
              <span className="filter-label">
                <SlidersHorizontal size={14} /> Category:
              </span>
              <div className="chips-group">
                {(['all', 'starter', 'main', 'sides', 'desert'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`chip-btn ${category === cat ? 'active' : ''}`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat === 'all'
                      ? 'All'
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-label">Diet:</span>
              <div className="chips-group">
                {(['all', 'veg', 'nonveg'] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`chip-btn ${diet === d ? 'active' : ''}`}
                    onClick={() => setDiet(d)}
                  >
                    {d === 'all'
                      ? 'All'
                      : d === 'veg'
                      ? 'Veg'
                      : 'Non-Veg'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="menu-results">
        <div className="results-info">
          <h2>Our Collection</h2>
          <span className="items-count">
            {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
          </span>
        </div>

        {filteredItems.length > 0 ? (
          <div className="food-grid">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <EyeOff size={48} className="empty-icon" />
            <h3>No dishes found</h3>
            <p>No dishes found. Try different filters or reset search parameters.</p>
            <button onClick={handleReset} className="reset-btn">
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
