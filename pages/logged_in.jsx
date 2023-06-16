import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import styles from '../styles/LoggedIn.module.css';
import HomePage from './home-page-logged';

const LoggedIn = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/home-page-logged');
    }
  }, [authUser, loading, router]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default LoggedIn;