import css from './MainPage.module.css';
import data from '../../data/articles.json';
import links from '../../data/socials.json';

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const mainArticles = data.slice(0, 3);
const articlesBelow = data.slice(3);

export const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  }, []);

  return (
    <main className={`${css.main}`}>
      <div className={`${css.container}`}>
        <ul className={css.posts}>
          {mainArticles.map(({ name, image, id, imageMobile, imageTablet }) => (
            <li key={id} className={css.post}>
              <Link
                className={css.postLink}
                to={`/mainpage/${id}`}
                state={{
                  from: location,
                }}
              >
                <picture className={css['post-img']}>
                  <source
                    media="(min-width: 1440px)"
                    srcSet={require(`../../${image}`)}
                  />
                  <source
                    media="(min-width: 768px) and (max-width: 1440px)"
                    srcSet={require(`../../${imageTablet}`)}
                  />
                  <source
                    media="(min-width: 320px) and (max-width: 767px)"
                    srcSet={require(`../../${imageMobile}`)}
                  />
                  <img
                    src={require(`../../${image}`)}
                    alt={image}
                    className={css['post-img']}
                  />
                </picture>

                <div className={css.overlay}>
                  <h2 className={`${css['post-title']} ${css['sub-title']}`}>
                    {name}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <section className={`${css.longread}`}>
          <ul className={`${css.blog}`}>
            {articlesBelow.map(
              ({ name, image, id, description, imageMobile }) => (
                <li key={id} className={`${css['blog-item']}`}>
                  <Link
                    to={`/mainpage/${id}`}
                    state={{
                      from: location,
                    }}
                    className={`${css['blog-link']}`}
                  >
                    <picture className={`${css['blog-photo']}`}>
                      <source
                        media="(min-width: 768px)"
                        srcSet={require(`../../${image}`)}
                      />
                      <source
                        media="(min-width: 320px) and (max-width: 767px)"
                        srcSet={require(`../../${imageMobile}`)}
                      />
                      <img
                        src={require(`../../${image}`)}
                        alt="cat"
                        className={`${css['blog-photo']}`}
                      />
                    </picture>

                    <div className={`${css.wrapper}`}>
                      <h2
                        className={`${css['blog-title']} ${css['sub-title']}`}
                      >
                        {name}
                      </h2>
                      <p className={`${css['blog-text']}`}>{description}</p>
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className={css.socials}>
            <h2 className={`${css['socials-title']} ${css.title}`}>
              Social Media
            </h2>
            <ul className={css['socials-list']}>
              {links.map(({ social, subscribers, icon, id }) => (
                <li className={css['socials-item']} key={id}>
                  <a href={social} className={css['social-link']}>
                    <img
                      src={require(`../../${icon}`)}
                      alt="instagram"
                      className={css['social-icon']}
                    />
                    <p
                      className={`${css['social-subscribers']} ${css.subscribers}`}
                    >
                      {subscribers}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={css['video']}>
            <h2 className={`${css['video-title']} ${css['title']}`}>
              Isn't it cute?
            </h2>
            <iframe
              className={css['responsive-iframe']}
              src="https://www.youtube-nocookie.com/embed/wE8s993ZV-8?si=kIjl1iyQGDI90dpO&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
};
