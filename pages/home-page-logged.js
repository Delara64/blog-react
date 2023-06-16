import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/HomePageLogged.module.css';
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';

const HomePageLogged = () => {
  const { authUser, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };

  useEffect(() => {
    // Check if the user is authenticated
    if (!authUser) {
      // Redirect the user to the login page
      router.push('/login');
    }
  }, [authUser, router]);

  if (!authUser) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.welcomeMessage}>{`Welcome ${authUser?.email}!`}</span>
      </h1>
      <div className={styles.buttonContainer}>
        <Link href="/articles-list" passHref>
          <button className={styles.button}>
            See all stories
          </button>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/article-form" passHref>
          <button className={styles.button}>
            Write a new story
          </button>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/user-profile">
          <div>
            <button className={styles.button}>See my Profile</button>
          </div>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonSignOut} onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default HomePageLogged;
