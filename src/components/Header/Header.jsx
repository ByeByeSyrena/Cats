import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={`${css.container} ${css['header-container']}`}>
        <img
          src={require('../../images/icons8.png')}
          alt="cat"
          className={css.logo}
        />
        <h1 className={css.label}>CatBox</h1>
      </div>
    </header>
  );
};
