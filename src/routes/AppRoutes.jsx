import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  useUser,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import Dashboard from './Dashboard';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import CreatingUser from './CreatingUser';
import EmailVerified from './EmailVerified';

const AppRoutes = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={isSignedIn ? <Dashboard /> : <SignInPage />}
      />
      <Route
        path="/sign-up"
        element={isSignedIn ? <Dashboard /> : <SignUpPage />}
      />
      <Route path="/createuser" element={<CreatingUser />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route
        path="/dashboard"
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
  );
};

export default AppRoutes;
