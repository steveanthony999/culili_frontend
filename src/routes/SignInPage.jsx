import { SignIn } from '@clerk/clerk-react';
import './SignInPage.css';

const SignInPage = () => {
  return (
    <div className="SignInPage">
      <SignIn signUpUrl="/sign-up" afterSignInUrl="/dashboard" />
    </div>
  );
};

export default SignInPage;
