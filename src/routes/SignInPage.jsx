import { SignIn } from '@clerk/clerk-react';
import './SignInPage.css';

const SignInPage = () => {
  return (
    <div className="SignInPage">
      <SignIn signUpUrl="/sign-up" afterSignInUrl="/protected" />
    </div>
  );
};

export default SignInPage;
