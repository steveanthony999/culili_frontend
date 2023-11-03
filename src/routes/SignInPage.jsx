import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <>
      <h1>Sign In Page</h1>
      <SignIn signUpUrl="/sign-up" afterSignInUrl="/protected" />
    </>
  );
};

export default SignInPage;
