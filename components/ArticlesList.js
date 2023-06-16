import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { fetchData } from '../lib/firebase';
import styles from '../styles/ArticlesList.module.css';
import Pagination from './Pagination';
import Like from 'components/Like';
import { useRouter } from 'next/router';

const ArticlesList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 2; // Number of articles to display per page
  const router = useRouter(); // Initialize the useRouter hook

  const handleSearch = (query) => {
    setSearchQuery(query); // Updates the search query state
    setCurrentPage(1); // Resets the current page to the first page
  };

  useEffect(() => {
    const fetchFirebaseData = async () => {
      const firebaseData = await fetchData(); // Fetches articles from Firebase
      setArticles(firebaseData || []); // Updates the articles state with the fetched data
    };

    fetchFirebaseData(); // Calls the fetchFirebaseData function when the component mounts
  }, []);

  const filteredArticles = articles.filter((article) => {
    const title = article.title || '';
    return title.toLowerCase().includes(searchQuery.toLowerCase());
    // Filters the articles based on the search query
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  // Calculates the total number of pages

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  // Gets the articles for the current page

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    // Updates the current page to the next page
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    // Updates the current page to the previous page
  };

  return (
    <div className={styles['articles-list-container']}>
      <div className={styles['search-bar-container']}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {currentArticles.map((article) => (
        <div className={styles['article-container']} key={article.id}>
          <h2 className={styles['article-title']}>
            <a
              href={`/article/${article.id}`}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/article/${article.id}`);
              }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {article.title}
            </a>

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
          <p className={styles['article-paragraph']}>{article.content}</p>
          <p className={styles['article-author']}>{article.author}</p>
          <p className={styles['article-category']}>{article.category}</p>
          <p className={styles['article-date']}>
            {article.dateCreated?.toDate()?.toLocaleDateString()}
          </p>
          <Like />
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={nextPage}
        onPreviousPage={previousPage}
      />
    </div>
  );
};

export async function getStaticProps() {
  const firebaseData = await fetchData(); // Fetches data from Firebase

  return {
    props: {
      initialArticles: firebaseData, // Passes the fetched data as initial articles
    },
  };
}

export default ArticlesList;
