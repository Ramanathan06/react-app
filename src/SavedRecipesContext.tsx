import React, { createContext, useContext, useState, useEffect } from 'react';
import type { MenuItem } from './menuData';

interface SavedRecipesContextProps {
  savedRecipes: MenuItem[];
  saveRecipe: (item: MenuItem) => void;
  removeRecipe: (id: number) => void;
  isSaved: (id: number) => boolean;
}

const SavedRecipesContext = createContext<SavedRecipesContextProps | undefined>(undefined);

export const SavedRecipesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState<MenuItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('party_menu_saved_recipes');
    if (stored) {
      try {
        setSavedRecipes(JSON.parse(stored));
      } catch (e) {
        localStorage.removeItem('party_menu_saved_recipes');
      }
    }
  }, []);

  const saveRecipe = (item: MenuItem) => {
    if (savedRecipes.some((r) => r.id === item.id)) return;
    const updated = [...savedRecipes, item];
    setSavedRecipes(updated);
    localStorage.setItem('party_menu_saved_recipes', JSON.stringify(updated));
  };

  const removeRecipe = (id: number) => {
    const updated = savedRecipes.filter((r) => r.id !== id);
    setSavedRecipes(updated);
    localStorage.setItem('party_menu_saved_recipes', JSON.stringify(updated));
  };

  const isSaved = (id: number) => {
    return savedRecipes.some((r) => r.id === id);
  };

  return (
    <SavedRecipesContext.Provider value={{ savedRecipes, saveRecipe, removeRecipe, isSaved }}>
      {children}
    </SavedRecipesContext.Provider>
  );
};

export const useSavedRecipes = () => {
  const context = useContext(SavedRecipesContext);
  if (!context) {
    throw new Error('useSavedRecipes must be used within SavedRecipesProvider');
  }
  return context;
};
