import { BrowserRouter } from 'react-router-dom';
import ClerkProviderWithRoutes from './routes/ClerkProviderWithRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ClerkProviderWithRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
