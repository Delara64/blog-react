// import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from 'styles/Index.module.css';
import backgroundVideo from 'public/backvideo.mp4';

const Index = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <div className={styles.buttonContainer}>
        
          <Link href="/articles-list" style={{ textDecoration: 'none' }}>
            <div className={styles.button} onClick={() => router.push('/')}>
              Enter as a Guest
            </div>
          </Link> 
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <div className={styles.button}>Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
