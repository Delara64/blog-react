// import React from 'react';
import ArticleForm from 'components/ArticleForm';
import NavBar from 'components/NavBar';
import styles from 'styles/ArticleForm.module.css';

const ArticleFormPage = () => {
  return (
    <div className={styles['articles-list-container']}>
      <NavBar />
      <div className={styles['article-container']}>
        <h3>Create!</h3>
        <p>Fill out the form below to create a new article</p>
        <ArticleForm />
      </div>
    </div>
  );
};

export default ArticleFormPage;
