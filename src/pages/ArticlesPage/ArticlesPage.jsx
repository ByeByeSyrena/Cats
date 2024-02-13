import { BackLink } from '../../components/BackLink/BackLink';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import css from './ArticlesPage.module.css';

import data from '../../data/articles.json';

export const ArticlesPage = () => {
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={`${css['background']}`}>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <section className={`${css['content']} ${css['container']}`}>
        <h1>{}</h1>
      </section>
    </div>
  );
};
