import { RedirectToSignIn, useUser } from '@clerk/clerk-react';

const EmailVerified = () => {
  const { isSignedIn, isLoaded } = useUser();

  const handleClose = () => {
    window.close();
  };

  return (
    <div>
      {isSignedIn && isLoaded ? (
        <>
          <h1>Email Verified Successfully</h1>
          <button onClick={handleClose}>Close Window</button>{' '}
        </>
      ) : (
        <>
          <RedirectToSignIn />
        </>
      )}
    </div>
  );
};

export default EmailVerified;
