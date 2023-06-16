import { useState, useEffect } from 'react';
import { fetchArticleById } from '../lib/firebase';
import styles from '../styles/ArticlesList.module.css';
import Like from './Like';
// import {db} from '../lib/firebase';
import { useRouter } from 'next/router';

const ArticlePage = () => {
  const router = useRouter()
  // const id = router.query.id;
  const {id} = router.query;
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (id) {
          const articleData = await fetchArticleById(id);
          setArticle(articleData);
        }
      } catch (error) {
        console.error('Error retrieving article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found!</div>;
  }

  return (
    <div className={styles['articles-list-container']}>
      <div className={styles['article-container']} key={article.id}>
        <h2 className={styles['article-title']}>
          <p>{article.title}</p>
        </h2>
        {article.coverImage && (
            <div className={styles['article-cover-image-container']}>
              <img
                src={article.coverImage}
                alt={article.title}
                className={styles['article-cover-image']}
              />
            </div>
        )}
        <p className={styles['article-content']}>
          {article.content && article.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </p>
        <p className={styles['article-author']}>Author: {article.author}</p>
        <p className={styles['article-category']}>Category: {article.category}</p>
        <p className={styles['article-date']}> Created in:
          {article.dateCreated?.toDate()?.toLocaleDateString()}
        </p>
        <Like />
      </div>
    </div>
  );
};

export default ArticlePage;
