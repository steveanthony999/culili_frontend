import { RedirectToSignIn, useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';

const CreatingUser = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    console.log(isSignedIn);
    console.log(user);
    console.log(isLoaded);
  }, [isLoaded, user, isSignedIn]);
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
