import { useState } from 'react';
import { getFirestore, collection, addDoc, updateDoc } from 'firebase/firestore';
import styles from 'styles/ArticleForm.module.css';
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';

const ArticleForm = () => {
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [author, setAuthor] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [coverImage, setCoverImage] = useState(''); 
  const [successMessage, setSuccessMessage] = useState(''); 

  const { authUser } = useAuth(); 
  // Authenticated user
  const router = useRouter(); 

  const handleLoginClick = () => {
    router.push('/login'); 
    // Handle login click
  };

  const db = getFirestore(); 
  // Firestore database 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    // Prevent form submission

    const article = {
      title,
      content,
      author,
      category,
      coverImage,
      createdAt: new Date(),
      userId: authUser.uid,
    }; // Create article object

    try {
      const docRef = await addDoc(collection(db, 'articles'), article); 
      // Add article to the 'articles' collection in Firestore
      console.log('Article submitted successfully! Document ID:', docRef.id); 
      // success message

      await updateDoc(docRef, {id: docRef.id}); // Update article with ID

      setTitle(''); 
      setContent(''); 
      setAuthor(''); 
      setCategory(''); 
      setCoverImage(''); 
      setSuccessMessage('Article submitted successfully!'); // success message
    } catch (error) {
      console.error('Error submitting article:', error); 
      setSuccessMessage('Error submitting article. Please try again.'); // error messages
    }
  };

  if (!authUser) {
    return (
      <p>
        Please{' '}
        <span onClick={handleLoginClick} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          log in
        </span>{' '}
        to access this page.
      </p>
    ); // Render login prompt if user is not authenticated
  }
  
  return (
    <div className={styles['form-wrapper']}>
      <form onSubmit={handleSubmit} className={styles['form-container']}>
        {successMessage && <p>{successMessage}</p>}
        <div className={styles['input-field']}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className={styles['input-field']}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter article content"
          /> 
        </div>
        <div className={styles['input-field']}>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
          /> 
        </div>
        <div className={styles['input-field']}>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select a category"
          /> 
        </div>
        <div className={styles['input-field']}>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="Enter a link to a .jpg"
          />
        </div>
        <button type="submit" className={`${styles.button} button`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
