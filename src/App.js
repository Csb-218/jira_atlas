import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css';
import Home from './routes/Home';
import NavbarBasic from './components/navigation/Navbar';

// Create a client
const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <NavbarBasic/>
      <Home/>
    </QueryClientProvider>
  );
}

export default App;
