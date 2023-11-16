import { useSelector } from 'react-redux';
import { SignIn } from '@clerk/clerk-react';
import './SignInPage.css';

const SignInPage = () => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className="SignInPage">
      <SignIn
        signUpUrl="/sign-up"
        afterSignInUrl={currentUser ? '/dashboard' : '/createuser'}
      />
    </div>
  );
};

export default SignInPage;
