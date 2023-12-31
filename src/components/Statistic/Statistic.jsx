import css from './Statistic.module.css';

export const Statistic = ({ title, children }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined ? <h2 className={css.title}>{title}</h2> : ''}
      {children}
    </section>
  );
};
