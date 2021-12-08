import s from './Statistics.module.css';

const Statistics = ({ good, bad, neutral, total, percentage }) => (
  <div className={s.stats}>
    <ul className={s.statsList}>
      <li className={s.statsItem}>
        <p className="">Good: {good}</p>
      </li>
      <li className={s.statsItem}>
        <p className="">Bad: {bad}</p>
      </li>
      <li className={s.statsItem}>
        <p className="">Neutral: {neutral}</p>
      </li>
      <li className={s.statsItem}>
        <p className="">Total: {total}</p>
      </li>
      <li className={s.statsItem}>
        <p className="">
          Positive feedback:
          {percentage}
        </p>
      </li>
    </ul>
  </div>
);

export default Statistics;
