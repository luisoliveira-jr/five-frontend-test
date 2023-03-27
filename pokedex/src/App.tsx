import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Pokedex from './pokedex/pokedex';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
};

export default App;
