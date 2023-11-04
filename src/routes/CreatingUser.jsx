import { useEffect, useState } from 'react';
import { RedirectToSignIn, useUser } from '@clerk/clerk-react';
import axios from 'axios';

const CreatingUser = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isUserCreated, setIsUserCreated] = useState(false);

  useEffect(() => {
    const createUserInDatabase = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/users/register',
          {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.emailAddresses[0].emailAddress,
          }
        );
        if (response.status === 201) {
          setIsUserCreated(true);
        }
      } catch (error) {
        console.error('Error creating user in database:', error);
      }
    };

    if (isSignedIn && isLoaded && !isUserCreated) {
      createUserInDatabase();
    }
  }, [isLoaded, isSignedIn, isUserCreated, user]);

  return (
    <div>
      {isSignedIn && isLoaded ? (
        <>
          <h1>
            {user.firstName} {user.lastName} is Signed in
          </h1>
          <h1>Email: {user.emailAddresses[0].emailAddress}</h1>
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
