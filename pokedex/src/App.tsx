
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Pokedex from './pokedex/pokedex';
import { AppRoutes } from './routes';
import { QueryClient, QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface AppProps {

}

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
       <Router>
        <AppRoutes />
      </Router>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
};

export default App;
