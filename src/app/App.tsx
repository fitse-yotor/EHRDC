import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <Toaster />
    </LanguageProvider>
  );
}

export default App;