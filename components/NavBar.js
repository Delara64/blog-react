// import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthUserContext';
import styles from '../styles/NavBar.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';


const NavBar = () => {
  const { authUser, signOut } = useAuth();
  const router = useRouter();

  // Handles the sign out action
  const handleSignOut = () => {
    signOut();
    router.push('/articles-list');
  };

  // Determines the link for the logo based on the user's authentication status
  const logoLink = authUser ? '/home-page-logged' : '/';

  // Checks if the provided page is currently active
  // const isActivePage = (page) => {
  //   return router.pathname === page ? styles.selected : '';
  // };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={logoLink} legacyBehavior>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={30}
                height={30}
                className={styles.logo}
              />
            </div>
          </Link>
        </li>
        {authUser && (
          // Displays the "Read all stories!" link for authenticated users
          <li className={styles.navItem}>
            <Link href="/articles-list">Read all stories!</Link>
          </li>
        )}
        {authUser && (
          // Displays the "Write a new story" link for authenticated users
          <li className={styles.navItem}>
            <Link href="/article-form">Write a new story</Link>
          </li>
        )}
        {authUser ? (
          // Displays the user's profile and sign out button for authenticated users
          <>
            <li className={styles.navItem}>
              <Link href="/user-profile" legacyBehavior>
                <a className={styles.navLink}>Profile</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <div className={styles.container}>
                <div className={styles.signOutContainer}>
                  <button className={styles.signOutButton} onClick={handleSignOut}>
                    Sign out
                  </button>
                </div>
              </div>
            </li>
          </>
        ) : (
          // Displays the login/register link for non-authenticated users
          <li className={styles.navItem}>
            <Link href="/login" legacyBehavior>
              <a className={styles.navLink}>Login/Register</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;