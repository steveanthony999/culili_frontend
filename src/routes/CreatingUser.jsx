import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RedirectToSignIn, useUser } from '@clerk/clerk-react';

import { register } from '../slices/authSlice';

const CreatingUser = () => {
  const { isSignedIn, user: clerkUser, isLoaded } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    const createUserInDatabase = async () => {
      try {
        const userData = {
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
          email: clerkUser.emailAddresses[0].emailAddress,
          numProjects: 0,
        };

        dispatch(register(userData));
      } catch (error) {
        console.error('Error creating user in database:', error);
      }
    };

    if (isSignedIn && isLoaded) {
      createUserInDatabase();
    }
  }, [dispatch, isLoaded, isSignedIn, clerkUser]);

  return (
    <div>
      {isSignedIn && isLoaded ? (
        <>
          <h1>
            {clerkUser.firstName} {clerkUser.lastName} is Signed in
          </h1>
          <h1>Email: {clerkUser.emailAddresses[0].emailAddress}</h1>
        </>
      ) : (
        <>
          <RedirectToSignIn />
        </>
      )}
    </div>
  );
};

export default CreatingUser;
