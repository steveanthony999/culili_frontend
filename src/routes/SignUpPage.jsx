import { SignUp } from '@clerk/clerk-react';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="SignUpPage">
      <SignUp signInUrl="/" redirectUrl="/createuser" />
    </div>
  );
};

export default SignUpPage;
