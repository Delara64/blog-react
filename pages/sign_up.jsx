// import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import { useState } from 'react';
import styles from '../styles/SignUp.module.css';
import BacktoHome from 'components/BacktoHome';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  // const router = useRouter();
  const [error, setError] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);
    if (passwordOne === passwordTwo) {
      createUserWithEmailAndPassword(email, passwordOne)
        .then(() => {
          console.log('Success. The user is created in firebase');
          setIsEmailSent(true);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError('Passwords do not match');
    }
    event.preventDefault();
  };

  return (
    <div className={`${styles.container} text-center`}>
      <div className={styles.content}>
        <h2>Sign Up</h2>
        {isEmailSent ? (
          <p>An email has been sent to {email} for verification. Please check your inbox.</p>
        ) : (
          <form className={styles.form} onSubmit={onSubmit}>
            {error && <div className={styles.alert}>{error}</div>}
            <div className={styles.formGroup}>
              <label htmlFor="signUpEmail" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                id="signUpEmail"
                placeholder="Email"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="signUpPassword" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                name="passwordOne"
                value={passwordOne}
                onChange={(event) => setPasswordOne(event.target.value)}
                id="signUpPassword"
                placeholder="Password"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="signUpPassword2" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                value={passwordTwo}
                onChange={(event) => setPasswordTwo(event.target.value)}
                id="signUpPassword2"
                placeholder="Password"
                className={styles.input}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Sign Up</button>
            </div>
          </form>
        )}
      </div>
      <BacktoHome />
    </div>
  );
};

export default SignUp;
