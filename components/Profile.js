import React from 'react';
import { useAuth } from '../context/AuthUserContext';
import fetchUserArticles from '../pages/api/user-articles';

const ProfilePage = () => {
  const { authUser } = useAuth();
  const [userArticles, setUserArticles] = React.useState([]);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        console.log('Fetching articles for email:', authUser?.email);
        const articles = await fetchUserArticles(authUser?.email); // Fetch user-specific articles using the user's email
        console.log('Fetched articles:', articles);
        setUserArticles(articles);
      } catch (error) {
        console.error('Failed to fetch user articles:', error);
      }
    };

    fetchArticles();
  }, [authUser?.email]);

  return (
    <div className="card" style={{ marginTop: '100px', marginBottom: '600px' }}>
      <div className="card-body">
        <h1 className="card-title">Email: {authUser?.email}</h1>
      </div>
      <div className="card-body">
        <h2>My Articles:</h2>
        {userArticles.map((article) => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;