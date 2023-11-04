import { BrowserRouter } from 'react-router-dom';
import ClerkProviderWithRoutes from './routes/ClerkProviderWithRoutes';

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
