import React from 'react';
import { QueryClient, QueryClientProvider, } from 'react-query';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Pokedex from './pokedex/pokedex';
import { AppRoutes } from './routes';

interface AppProps {

}

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={new QueryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
