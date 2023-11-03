import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import CreatingUser from './CreatingUser';

if (!import.meta.env.VITE_CLERK_PK) {
  throw new Error('Missing Publishable Key');
}

const clerkPubKey = import.meta.env.VITE_CLERK_PK;

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/createuser" element={<CreatingUser />} />
        <Route
          path="/protected"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn redirectUrl={'/'} />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

export default ClerkProviderWithRoutes;
