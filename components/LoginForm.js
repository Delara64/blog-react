import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import styles from '../styles/LoginForm.module.css';
import BacktoHome from './BacktoHome';

const LoginForm = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(null); 
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth(); // Custom hook to access authentication functions

  // Function called when the form is submitted
  const onSubmit = (event) => {
    setError(null); // Clear any previous error
    signInWithEmailAndPassword(email, password) // Call the signInWithEmailAndPassword function with email and password
      .then(( ) => {
        console.log("Success. The user is created in firebase"); // Log success message
        router.push('/home-page-logged'); // Navigate to the home page for logged-in users
      })
      .catch((error) => {
        setError(error.message); // Set the error message if there is an error
      });
    event.preventDefault(); // Prevent the default form submission behavior
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          {error && <div className={styles.alert}>{error}</div>} {/* Display error message if it exists */}
          <div className={styles.formGroup}>
            <label htmlFor="loginEmail">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)} // Update email state on input change
              name="email"
              id="loginEmail"
              placeholder="Email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)} // Update password state on input change
              id="loginPassword"
              placeholder="Password"
            />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.button}>Login</button>
            {/* <button className={styles.button} onClick={signInWithGoogle}>Sign in with Google</button> */}
            <Link href="/PasswordResetPage">
             Forgot Password?
            </Link>
          </div>
          <div className={styles.formGroup}>
            <p>
              No account? <Link href="/sign_up">Create one!</Link>
            </p>
          </div>
        </form>
      </div>
      <BacktoHome />
    </div>
  
  );
};

export default LoginForm;
