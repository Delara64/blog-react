import firebase from '../lib/firebase';

export default async function handleEmailVerification(req, res) {
  try {
    const { oobCode } = req.query || {}; 
    
    // Apply the email verification action code using Firebase
    await firebase.auth().applyActionCode(oobCode);

    // You can include additional logic here, such as updating the user's status in your database or performing any necessary actions after verification.

    res.status(200).json({ message: 'Email verification successful' });
  } catch (error) {
    console.error('Email verification failed', error);
    res.status(500).json({ error: 'Email verification failed' });
  }
}
