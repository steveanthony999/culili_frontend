import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <>
      <h1>Sign Up Page</h1>
      <SignUp signInUrl="/" redirectUrl="/createuser" />
    </>
  );
};

export default SignUpPage;
