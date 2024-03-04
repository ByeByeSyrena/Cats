import { BackLink } from '../../components/BackLink/BackLink';
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import css from './ArticlesPage.module.css';

import data from '../../data/articles.json';

function splitArticle(text) {
  const textsplit = text.split('.');
  let phar = [];
  let element = [];
  for (let sentence of textsplit) {
    if (element.length < 5) {
      element.push(sentence.trim());
    } else {
      phar.push(element.join('. '));
      element = [sentence.trim()];
    }
  }
  if (element.length > 0) {
    phar.push(element.join('. '));
  }
  return phar;
}

export const ArticlesPage = () => {
  const { id } = useParams();

  const article = data.find(item => item.id === id);

  const adjustedArticle = splitArticle(article.article);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={`${css['background']}`}>
      <section className={`${css['content']} ${css['container']}`}>
        <BackLink to={backLinkHref}>Go back</BackLink>

        <div className={css.articleGrid}>
          {article ? (
            <h1 className={css['post-title']}>{article.name}</h1>
          ) : (
            <p>Article not found</p>
          )}
          {adjustedArticle ? (
            <div className={css.articleDiv}>
              {adjustedArticle.map((group, index) => (
                <p key={index}>{group}</p>
              ))}
            </div>
          ) : (
            <p>Article not found</p>
          )}
        </div>
      </section>
    </div>
  );
};
