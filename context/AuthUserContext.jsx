import { createContext, useContext } from 'react';
import useFirebaseAuth from '../lib/useFirebaseAuth';

// Create a context for storing authentication user data
const AuthUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => {}, // Placeholder function for signing in with email and password
  createUserWithEmailAndPassword: async () => {}, // Placeholder function for creating a user with email and password
  signOut: async () => {} // Placeholder function for signing out
});

// Provider component to provide the authentication context to its children
export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth(); // Custom hook for handling Firebase authentication
  return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>;
}

// Custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthUserContext);
}
