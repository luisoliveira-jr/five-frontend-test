
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { QueryClient, QueryClientProvider, } from 'react-query';
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
