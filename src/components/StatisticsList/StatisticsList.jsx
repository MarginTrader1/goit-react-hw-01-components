import css from './StatisticsList.module.css';
import { getRandomHexColor } from 'components/Color';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={css.stat_list}>
      {stats.map(item => (
        <li
          key={item.id}
          className={css.stat_item}
          // инлайн стиль - реализация случайного цвета
          style={{
            backgroundColor: getRandomHexColor(),
          }}
        >
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
};
