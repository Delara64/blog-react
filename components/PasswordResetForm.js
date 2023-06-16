import { useState } from 'react';
import { auth } from '../lib/firebase';

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');
  const [isResetEmailSent, setIsResetEmailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await auth.sendPasswordResetEmail(email);
      setIsResetEmailSent(true);
    } catch (error) {
      setError(error.message);
    }
  };

  if (isResetEmailSent) {
    return <p>Password reset email sent. Please check your inbox.</p>;
  }

  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default PasswordResetForm;
