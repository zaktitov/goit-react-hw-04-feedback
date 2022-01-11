import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ options }) => {
  return (
    <ul className={s.List}>
      {options.map(([label, value], idx) => (
        <li key={idx} className={s.Item}>
          <p className={s.Label}>{label}:</p>
          <p className={s.Amount}>{value}</p>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array),
};
