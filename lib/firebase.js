import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBL4914tjSlAUpwXjkfIHyyPZB0AMqoaEo",
      authDomain: "my-team-project-blog.firebaseapp.com",
      databaseURL: "https://my-team-project-blog-default-rtdb.firebaseio.com/",
      projectId: "my-team-project-blog",
      storageBucket: "my-team-project-blog.appspot.com",
      messagingSenderId: "554245517495",
      appId: "1:554245517495:web:40bccfc9e1963343d39d32",
      measurementId: "G-VFL3QVHRWR"
  };

// If a Firebase app hasn't already been created
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Export the Firebase auth object
export const auth = firebase.auth();
export const fetchData = async () => {
  try {
    const snapshot = await firebase.firestore().collection('articles').get();
    const articlesData = snapshot.docs.map((doc) => doc.data());
    return articlesData || [];
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return [];
  }
};

export const fetchArticleById = async (articleId) => {
  try {
    const snapshot = await firebase.firestore().collection('articles').doc(articleId).get();
    return { id: snapshot.id, ...snapshot.data() };
  } catch (error) {
    console.error('Error fetching article from Firebase:', error);
    throw error;
  }
};

export const db = firebase.firestore();

export default firebase;
