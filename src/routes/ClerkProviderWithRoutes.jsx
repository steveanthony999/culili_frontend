import { ClerkProvider } from '@clerk/clerk-react';
import AppRoutes from './AppRoutes';

if (!import.meta.env.VITE_CLERK_PK) {
  throw new Error('Missing Publishable Key');
}

const clerkPubKey = import.meta.env.VITE_CLERK_PK;

const ClerkProviderWithRoutes = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <AppRoutes />
    </ClerkProvider>
  );
};

export default ClerkProviderWithRoutes;
