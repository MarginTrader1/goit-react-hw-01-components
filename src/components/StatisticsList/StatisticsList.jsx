import css from './StatisticsList.module.css';
import { getRandomHexColor } from 'components/Color';

export const StatisticsList = ({ data }) => {
  return (
    <ul className={css.stat_list}>
      {data.map(item => (
        <li
          key={item.id}
          className={css.stat_item}
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
