import { useEffect } from 'react';
import { useRouter } from 'next/router';
import firebase from '../../lib/firebase';
import HomePage from '../home-page-logged';

const EmailVerificationPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleEmailVerification = async () => {
      try {
        const { oobCode } = router.query;
        await firebase.auth().applyActionCode(oobCode);

        // Add your custom logic here, such as updating user data or redirecting to a specific page
        // For example, you can redirect the user to HomePage component after successful verification
        router.replace('/home-page-logged');
      } catch (error) {
        console.error('Email verification failed', error);
        // Handle the error (e.g., display an error message)
      }
    };

    handleEmailVerification();
  }, [router]); 

  return <HomePage />;
};

export default EmailVerificationPage;
