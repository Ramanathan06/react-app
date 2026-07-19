import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Frown, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <Frown size={64} className="notfound-icon" />
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        
        <Link to={isAuthenticated ? '/' : '/signin'} className="notfound-btn">
          <ArrowLeft size={16} />
          <span>{isAuthenticated ? 'Back to Menu' : 'Back to Sign In'}</span>
        </Link>
      </div>
    </div>
  );
};
