import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { SavedRecipesProvider } from './SavedRecipesContext';
import { ProtectedRoute } from './ProtectedRoute';
import { SignIn } from './SignIn';
import { Menu } from './Menu';
import { FoodDetail } from './FoodDetail';
import { SavedRecipes } from './SavedRecipes';
import { NotFound } from './NotFound';

function App() {
  return (
    <AuthProvider>
      <SavedRecipesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route path="/menu/:id" element={<FoodDetail />} />
            <Route path="/saved-recipes" element={<SavedRecipes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SavedRecipesProvider>
    </AuthProvider>
  );
}

export default App;
