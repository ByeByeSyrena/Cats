import { BackLink } from '../../components/BackLink/BackLink';
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import css from './ArticlesPage.module.css';

import data from '../../data/articles.json';

export const ArticlesPage = () => {
  const { id } = useParams();

  const article = data.find(item => item.id === id);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={`${css['background']}`}>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <section className={`${css['content']} ${css['container']}`}>
        {article ? (
          <h1 className={css['post-title']}>{article.name}</h1>
        ) : (
          <p>Article not found</p>
        )}
        {article ? <p>{article.article}</p> : <p>Article not found</p>}
      </section>
    </div>
  );
};
