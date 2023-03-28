
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Pokedex from './pokedex/Pokedex';
import { AppRoutes } from './routes';
import { QueryClient, QueryClientProvider, } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Favorite from '@mui/icons-material/Favorite';
import { ProfileProvider } from './profile/contexts/ProfileContext';

interface AppProps {

}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileProvider>
       <Router>
        <AppRoutes />
      </Router>
      </ProfileProvider>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
};

export default App;
