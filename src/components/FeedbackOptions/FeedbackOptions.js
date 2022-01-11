import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.List}>
      {options.map((label, idx) => (
        <li key={idx} className={s.Item}>
          <button
            className={s.Btn}
            type="button"
            onClick={() => onLeaveFeedback(label)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
