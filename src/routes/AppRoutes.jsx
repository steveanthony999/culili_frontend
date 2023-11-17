import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

import { logout, login } from '../slices/authSlice';

const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSignedIn, user: clerkUser } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      const userData = {
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        email: clerkUser.emailAddresses[0].emailAddress,
      };

      dispatch(login(userData));
      navigate('/dashboard');
    } else if (!isSignedIn) {
      dispatch(logout());
    }
  }, [isSignedIn, clerkUser, navigate, dispatch]);

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
