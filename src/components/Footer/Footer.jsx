import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <img
          src={require('../../images/icons8.png')}
          alt="cat"
          className={css.logo}
        />
        <h2 className={css.label}>CatBox</h2>
      </div>
    </footer>
  );
};
