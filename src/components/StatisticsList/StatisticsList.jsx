import css from './StatisticsList.module.css';

export const StatisticsList = ({ data }) => {
  return (
    <ul className={css.stat_list}>
      {data.map(item => (
        <li key={item.id} className={css.stat_item}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
};
